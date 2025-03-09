import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const API_URL = "https://api.themoviedb.org/3/movie/"
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

const useMovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_URL}${id}?language=ko`, {
                    method : "GET",
                    headers :{
                        accept : "application/json",
                        Authorization : `Bearer ${ACCESS_TOKEN}`,
                    }
                })
                if (!response.ok) {
                    throw new Error (`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetail()
    }, [id])
    return {movie, loading, error}
}

export default useMovieDetail