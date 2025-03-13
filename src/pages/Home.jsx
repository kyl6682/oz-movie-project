import MovieList from "../components/movies/MovieList";
import MovieSlide from "../components/movies/MovieSlide";
import { Wrapper } from "../style/CommonStyles";

function Home() {
  return (
    <>
      <Wrapper>
        <MovieSlide />
        <MovieList />
      </Wrapper>
    </>
  );
}

export default Home;
