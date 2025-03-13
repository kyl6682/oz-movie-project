import { Link } from "react-router-dom";
import { MovieCard, MovieRate, MovieTitle, PosterImage } from "../../style/MovieStyles";

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
