import { useState } from "react";

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?language=ko&page=${page}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMovies((prevMovies) => {
        // 중복 방지용 Map 사용
        const uniqueMovies = new Map([...prevMovies.map(movie => [movie.id, movie])]);
        data.results.forEach((movie) => uniqueMovies.set(movie.id, movie));
        return [...uniqueMovies.values()];
      });
      setPage((prevPage) => prevPage + 1);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      console.error("영화 가져오기 실패", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(page, movies);
  return { movies, fetchData, hasMore, loading };
};

export default useFetchMovies;
