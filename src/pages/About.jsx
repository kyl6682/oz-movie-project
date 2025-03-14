import { useEffect } from "react";
import MovieDetail from "../components/movies/MovieDetail";
import SimilarMovie from "../components/movies/SimilarMovie";
import { PageWrapper } from "../style/CommonStyles";
import useMovieDetail from "../hooks/useMovieDetail";

function About() {
  const {movie} = useMovieDetail()

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      scrollTop();
    }, [movie]);

  return (
    <>
    <MovieDetail />
    <PageWrapper>
      <SimilarMovie />
    </PageWrapper>
    </>
  );
}

export default About;
