import movieListData from "../data/movieListData.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCards = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const MovieCard = styled.li`
  width: 250px;
  list-style: none;
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
        <div>평점: {movie.vote_average}</div>
      </Link>
    </MovieCard>
  );
};

function MovieList() {
  const movies = movieListData.results;
  const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

  return (
    <MovieCards>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieCards>
  );
}

export default MovieList;
