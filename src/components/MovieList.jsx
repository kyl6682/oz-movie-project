import styled from "styled-components";
import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";

const MovieCards = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const MovieCard = styled.li`
  width: 250px;
  height: 400px;
  list-style: none;
  border: 1px solid #f1f1f1;
  padding: 20px;
  img {
    width: 200px;
    height: 300px;
  }
`;

const Movie = ({ movie }) => {
  return (
    <MovieCard key={movie.id}>
      <Link to={`/detail/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <div>평점: {movie.vote_average.toFixed(2)}</div>
      </Link>
    </MovieCard>
  );
};

function MovieList() {
  const { movies, loading, error } = useMovies();

  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;
  console.log(movies);
  return (
    <MovieCards>
      {movies
        .filter((movie) => movie.adult !== true)
        .map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </MovieCards>
  );
}

export default MovieList;
