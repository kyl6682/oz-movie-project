import { useEffect, useState } from "react"

const API_URL = "https://api.themoviedb.org/3/movie/popular"
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(API_URL, {
                    method : "GET",
                    headers : {
                        accept : "application/json",
                        Authorization : `Bearer ${ACCESS_TOKEN}`,
                    },
                });
                if (!response.ok) {
                    throw new Error (`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    }, [])
    return {movies, loading, error}
}

export default useMovies