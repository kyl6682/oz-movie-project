import useDevice from "../hooks/useDevice";
import MovieDetail from "../components/movies/MovieDetail";
import { Wrapper } from "../style/CommonStyles";

function About() {
  const {isMobile, isTablet, isPC} = useDevice()
  return (
    <>
    {isMobile && (
            <Wrapper>
            <MovieDetail />
          </Wrapper>
    )}
        {isTablet && (
            <Wrapper>
            <MovieDetail />
          </Wrapper>
    )}
    {isPC && (
            <Wrapper direction="row">
            <MovieDetail />
          </Wrapper>
    )}
    </>
  );
}

export default About;
