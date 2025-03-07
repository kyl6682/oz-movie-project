// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import movieListData from "../data/movieListData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function MovieSlide() {
  const MovieData = movieListData.results;
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
            disableOnInteraction : false
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {MovieData.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default MovieSlide;
