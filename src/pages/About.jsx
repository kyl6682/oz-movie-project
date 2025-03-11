import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";
import useDevice from "../hooks/useDevice";

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
