import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";

const DetailWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <>
      <DetailWraper>
        <MovieDetail />
      </DetailWraper>
    </>
  );
}

export default About;
