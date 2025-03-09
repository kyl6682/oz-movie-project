// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import useMovies from "../hooks/useMovies";

function MovieSlide() {
  const {movies, loading, error} = useMovies();
  const movieData = movies.filter((movie) => movie.adult !== true).slice(0,8)

  console.log('영화', movieData)

  if (loading) return <p>loading...</p>
  if (error) return <p>error : {error}</p>
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
        {movieData.map((movie) => {
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
