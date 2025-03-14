import useMovieDetail from "../../hooks/useMovieDetail";
import {
  DetailWrapper,
  DetailGenre,
  DetailImage,
  DetailInfo,
  DetailOverview,
  DetailRate,
  DetailTagline,
  DetailTitle,
} from "../../style/MovieStyles";

const MovieDetail = () => {
  const { movie, loading, error } = useMovieDetail();
  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;

  const movieDetail = {
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    rate: movie.vote_average.toFixed(2),
    image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    background: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
    genres: movie.genres.map((genre) => genre.name).join(", "),
    overview: movie.overview,
  };


  console.log(movieDetail);
  return (
    <>
      <DetailWrapper background={movieDetail.background}>
        <DetailInfo>
          <DetailRate>⭐️ {movieDetail.rate}</DetailRate>
          <DetailTitle>{movieDetail.title}</DetailTitle>
          <DetailTagline>{movieDetail.tagline}</DetailTagline>
          <DetailGenre>{movieDetail.genres}</DetailGenre>
          <DetailOverview>{movieDetail.overview}</DetailOverview>
        </DetailInfo>
        <DetailImage>
          <img src={movieDetail.image} alt={movieDetail.title} />
        </DetailImage>
      </DetailWrapper>
    </>
  );
};

export default MovieDetail;
