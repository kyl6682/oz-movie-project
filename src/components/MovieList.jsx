import movieListData from "../data/movieListData.json";
import styled from "styled-components"

const MovieCards = styled.ul `
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

const MovieCard = styled.li `
    width: 250px;
    list-style: none;
    img {
        width: 200px;
        height: 300px;
    }
`

const Movie = ({ movie }) => {
  return (
    <MovieCard key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <div>평점: {movie.vote_average}</div>
    </MovieCard>
  );
};

function MovieList() {
  const movies = movieListData.results;

  return (
    <MovieCards>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieCards>
  );
}

export default MovieList;
