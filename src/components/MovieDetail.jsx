import styled from "styled-components";
import useMovieDetail from "../hooks/useMovieDetail";

const MovieInfoDiv = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: start;
  align-items: start;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    background-color: #875dea;
    padding: 2px 7px;
    color: #f1f1f1;
    border-radius: 3px;
    font-size: 0.9rem;
  }
  h2 {
    font-size: 2rem;
  }
`;

const MovieDetail = () => {
  const { movie, loading, error } = useMovieDetail();
  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;

  const movieDetail = {
    id: movie.id,
    title: movie.title,
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
        <span>⭐️ {movieDetail.rate}</span>
        <h2>{movieDetail.title}</h2>
        <div>{movieDetail.genres}</div>
        <div>{movieDetail.overview}</div>
      </MovieInfoDiv>
    </>
  );
};

export default MovieDetail;
