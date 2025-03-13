// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import useMovies from "../../hooks/useMovies";
import { Link } from "react-router-dom";
import { SlideInfo, SlideSection } from "../../style/MovieStyles";
import Button from "../common/Button";

function MovieSlide() {
  const { movies, loading, error } = useMovies();
  const movieData = movies.filter((movie) => movie.adult !== true).slice(0, 1);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error : {error}</p>;
  console.log(movies);

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {movieData.map((movie) => {
          return (
            <SwiperSlide className="swiper-slide" key={movie.id}>
              <SlideSection>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                />
                <SlideInfo>
                  <h2>{movie.title}</h2>
                  <Link to={`/detail/${movie.id}`}>
                    <Button text={"자세히 보기"} />
                  </Link>
                </SlideInfo>
              </SlideSection>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default MovieSlide;
