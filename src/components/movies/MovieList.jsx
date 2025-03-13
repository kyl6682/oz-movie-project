import styled from "styled-components";
import useFetchMovies from "../../hooks/useFetchMovies";
import useScrollObserve from "../../hooks/useScrollObserve";
import Movie from "./Movie";
import SkeletonMovie from "./SkeletonMovie";

const MovieCards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 5px;
`;

function MovieList() {
  const { movies, fetchData, hasMore, loading } = useFetchMovies();
  const observeRef = useScrollObserve({ fetchData, hasMore });

  return (
    <>
      <MovieCards>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonMovie key={index} />
            ))
          : movies
              .filter((movie) => movie.adult !== true)
              .map((movie) => <Movie key={movie.id} movie={movie} />)}
        <div
          ref={observeRef}
          style={{ height: "10px", background: "transparent" }}
        />
      </MovieCards>
    </>
  );
}

export default MovieList;
