import styled from "styled-components";
import useFetchMovies from "../../hooks/useFetchMovies";
import useScrollObserve from "../../hooks/useScrollObserve";
import Movie from "./Movie";

const MovieCards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 5px;
`;

function MovieList () {
  const { movies, fetchData, hasMore, loading} = useFetchMovies();
  const observeRef = useScrollObserve({fetchData, hasMore});

  return (
    <>
    <MovieCards>
    {movies
        .filter((movie) => movie.adult !== true)
        .map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      {loading && <p>Loading</p>}
      <div ref={observeRef} style={{ height: "10px", background: "transparent" }} />
    </MovieCards>
    </>
  )
}

export default MovieList