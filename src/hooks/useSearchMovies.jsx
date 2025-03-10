import { useState, useEffect } from "react";
import { getRegExp } from "korean-regexp";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const useSearchMovies = (query) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setFilteredMovies([]); 
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}?query=${query}&language=ko`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            accept: "application/json",
          },
        });

        if (!response.ok) throw new Error("API 요청 실패");

        const data = await response.json();

        const regex = getRegExp(query, { initialSearch: true });
        const filtered = data.results?.filter((movie) =>
          regex.test(movie.title)
        ) || [];

        setFilteredMovies(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { filteredMovies, loading, error };
};

export default useSearchMovies;
