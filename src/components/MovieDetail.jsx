import styled from "styled-components";
import useMovieDetail from "../hooks/useMovieDetail";

const MovieInfoDiv = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const RateSpan = styled.span`
  background-color: #875dea;
  padding: 2px 7px;
  color: #f1f1f1;
  border-radius: 3px;
  font-size: 0.9rem;
`;

const MovieTitle = styled.h2`
    font-size: 2rem;
    margin: 10px 0 20px 0;
`

const MovieTagline = styled.div`
    font-size: 1.3rem;
    margin: 20px 0 50px 0;
    font-weight: 600;
    flex-grow: 1;
`

const MovieGenre = styled.div`
  color: rgba(0, 0, 0, 0.7);
`

const MovieOverview = styled.div`
  height: 300px;
  padding-right: 30px;
  overflow: scroll;
  line-height: 1.5;
`

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
      <MovieInfoDiv>
        <RateSpan>⭐️ {movieDetail.rate}</RateSpan>
        <MovieTitle>{movieDetail.title}</MovieTitle>
        <MovieTagline>{movieDetail.tagline}</MovieTagline>
        <MovieGenre>{movieDetail.genres}</MovieGenre>
        <MovieOverview>{movieDetail.overview}</MovieOverview>
      </MovieInfoDiv>
    </>
  );
};

export default MovieDetail;
