import styled from "styled-components";
import useMovies from "../../hooks/useMovies";
import Movie from "./Movie";

const MovieCards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 5px;
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
