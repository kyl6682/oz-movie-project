import movieListData from "../data/movieListData.json";

const Movie = ({ movie }) => {
  return (
    <li key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <div>평점: {movie.vote_average}</div>
    </li>
  );
};

function MovieList() {
  const movies = movieListData.results;

  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
