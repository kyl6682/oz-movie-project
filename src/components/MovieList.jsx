import styled from "styled-components";
import useMovies from "../hooks/useMovies";
import Movie from "./Movie";

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
