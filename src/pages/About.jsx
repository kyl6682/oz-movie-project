import useDevice from "../hooks/useDevice";
import MovieDetail from "../components/movies/MovieDetail";
import { PageWrapper } from "../style/CommonStyles";

function About() {
  const { isMobile, isTablet, isPC } = useDevice();
  return (
    <>
      {isMobile && (
        <PageWrapper>
          <MovieDetail />
        </PageWrapper>
      )}
      {isTablet && (
        <PageWrapper>
          <MovieDetail />
        </PageWrapper>
      )}
      {isPC && (
        <PageWrapper>
          <MovieDetail />
        </PageWrapper>
      )}
    </>
  );
}

export default About;
