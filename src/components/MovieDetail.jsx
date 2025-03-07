import styled from "styled-components";
import movieDetailData from "../data/movieDetailData.json";

const DetailWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieInfoDiv = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div{
    display : flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MovieInfo = ({ movie }) => {
  const movieDetail = {
    id: movie.id,
    title: movie.belongs_to_collection.name,
    rate: movie.vote_average,
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

function MovieDetail() {
  const movieData = movieDetailData;
  return (
    <>
      <DetailWraper>
        <MovieInfo movie={movieData} />
      </DetailWraper>
    </>
  );
}

export default MovieDetail;