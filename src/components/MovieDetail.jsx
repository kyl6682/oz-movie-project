import styled from "styled-components";
import useMovieDetail from "../hooks/useMovieDetail";

const MovieInfoDiv = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: start;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MovieDetail = () => {
  const {movie, loading, error } = useMovieDetail()
  if (loading) return <p>loading...</p>
  if (error) return <p>error : {error}</p>

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
        <div>
          <h2>{movieDetail.title}</h2>
          <span>{movieDetail.rate}</span>
        </div>
        <div>{movieDetail.genres}</div>
        <p>{movieDetail.overview}</p>
      </MovieInfoDiv>
    </>
  );
};

export default MovieDetail;
