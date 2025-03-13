import useMovieDetail from "../../hooks/useMovieDetail";
import { DetailGenre, DetailInfo, DetailOverview, DetailRate, DetailTagline, DetailTitle } from "../../style/MovieStyles";

const MovieDetail = () => {
  const { movie, loading, error } = useMovieDetail();
  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;
  console.log(movie);

  const movieDetail = {
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    rate: movie.vote_average.toFixed(2),
    image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    genres: movie.genres.map((genre) => genre.name).join(", "),
    overview: movie.overview,
  };

  console.log(movieDetail);
  return (
    <>
      <img src={movieDetail.image} />
      <DetailInfo>
        <DetailRate>⭐️ {movieDetail.rate}</DetailRate>
        <DetailTitle>{movieDetail.title}</DetailTitle>
        <DetailTagline>{movieDetail.tagline}</DetailTagline>
        <DetailGenre>{movieDetail.genres}</DetailGenre>
        <DetailOverview>{movieDetail.overview}</DetailOverview>
      </DetailInfo>
    </>
  );
};

export default MovieDetail;
