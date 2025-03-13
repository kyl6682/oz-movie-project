import MovieList from "../components/movies/MovieList";
import MovieSlide from "../components/movies/MovieSlide";
import { PageWrapper } from "../style/CommonStyles";

function Home() {
  return (
    <>
      <MovieSlide />

      <PageWrapper>
        <MovieList />
      </PageWrapper>
    </>
  );
}

export default Home;
