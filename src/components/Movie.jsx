import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = styled.li`
  width: 230px;
  height: 350px;
  list-style: none;
  border-radius: 7px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 220px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  h3 {
    margin: 10px 5px;
    font-weight: 400;
  }
  span {
    background-color: #875dea;
    padding: 2px 7px;
    color: #f1f1f1;
    border-radius: 3px;
    font-size: 0.8rem;
    position: absolute;
    top: 10px;
    right: 15px;
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
        <span>⭐️ {movie.vote_average.toFixed(2)}</span>
        <h3>{movie.title}</h3>
      </Link>
    </MovieCard>
  );
}

export default Movie;
