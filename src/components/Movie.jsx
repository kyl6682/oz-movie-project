import { Link } from "react-router-dom";
import styled from "styled-components";


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


function Movie({ movie }) {
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
}

export default Movie