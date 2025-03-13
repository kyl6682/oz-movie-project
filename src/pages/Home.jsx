import MovieList from "../components/movies/MovieList";
import MovieSlide from "../components/movies/MovieSlide";
import { PageWrapper } from "../style/CommonStyles";

function Home() {
  return (
    <>
      <PageWrapper>
        <MovieSlide />
        <MovieList />
      </PageWrapper>
    </>
  );
}

export default Home;
