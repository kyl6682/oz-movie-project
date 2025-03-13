import MovieDetail from "../components/movies/MovieDetail";
import SimilarMovie from "../components/movies/SimilarMovie";
import { PageWrapper } from "../style/CommonStyles";

function About() {
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
