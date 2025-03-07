import styled from "styled-components";
import movieDetailData from "../data/movieDetailData.json";

const MovieInfoDiv = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MovieDetail = () => {
  const movieData = movieDetailData;

  const movieDetail = {
    id: movieData.id,
    title: movieData.belongs_to_collection.name,
    rate: movieData.vote_average,
    image: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
    genres: movieData.genres.map((genre) => genre.name).join(", "),
    overview: movieData.overview,
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
