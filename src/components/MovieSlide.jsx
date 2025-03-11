// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";

import useMovies from "../hooks/useMovies";
import { Link } from "react-router-dom";

const SlideDiv = styled.div`
  position: relative;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    z-index: 1;
  }
  img {
    width: 100%;
    display: block;
  }
  div {
    z-index: 2;
    position: absolute;
    bottom: 60px;
    left: 100px;
    h2 {
      color: white;
      font-size: 68px;
    }
    button {
      margin: 20px 0;
      padding: 10px 20px;
      font-size: 1.2rem;
      border-radius: 7px;
      background-color: #875dea;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #6f48cb;
      }
    }
  }
`;

function MovieSlide() {
  const { movies, loading, error } = useMovies();
  const movieData = movies.filter((movie) => movie.adult !== true).slice(0, 8);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {movieData.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <SlideDiv>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                />
                <div>
                  <h2>{movie.title}</h2>
                  <Link to={`/detail/${movie.id}`}>
                    <button>자세히 보기</button>
                  </Link>
                </div>
              </SlideDiv>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default MovieSlide;
