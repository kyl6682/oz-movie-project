import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = styled.li`
  width: 230px;
  height: 350px;
  list-style: none;
  border-radius: 7px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease-in-out;
&:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px ${(props) => props.theme.shadow};
  z-index: 10;
}
`;

export const PosterImage = styled.img `
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`

export const MovieTitle = styled.h3 `
  margin: 5px 5px;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
`
const MovieRate = styled.span `
  background-color: #875dea;
  padding: 2px 7px;
  color: #f1f1f1;
  border-radius: 3px;
  font-size: 0.8rem;
  position: absolute;
  top: 15px;
  right: 15px;
`

function Movie({ movie }) {
  const getPosterUrl = (posterPath) => {
    if (!posterPath || posterPath === "null") {
      return "../../src/assets/images/alt_image.png"
    }
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }
  return (
    <MovieCard key={movie.id}>
      <Link to={`/detail/${movie.id}`}>
        <div style={{width: "220px", height:"300px"}}>
          <PosterImage
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
          />
        </div>
        <MovieRate>⭐️ {movie.vote_average.toFixed(2)}</MovieRate>
        <MovieTitle>{movie.title}</MovieTitle>
      </Link>
    </MovieCard>
  );
}

export default Movie;
