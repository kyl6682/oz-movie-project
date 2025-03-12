import styled from "styled-components";
import useDevice from "../hooks/useDevice";
import MovieDetail from "../components/movies/MovieDetail";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileWrapper = styled(Wrapper)`
  flex-direction: column;
`

function About() {
  const {isMobile, isTablet, isPC} = useDevice()
  return (
    <>
    {isMobile && (
            <MobileWrapper>
            <MovieDetail />
          </MobileWrapper>
    )}
        {isTablet && (
            <Wrapper>
            <MovieDetail />
          </Wrapper>
    )}
    {isPC && (
            <Wrapper>
            <MovieDetail />
          </Wrapper>
    )}
    </>
  );
}

export default About;
