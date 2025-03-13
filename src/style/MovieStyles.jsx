import styled from "styled-components";
import { Wrapper } from "./CommonStyles";

// Movie
export const MovieCard = styled.li`
  width: 250px;
  height: 350px;
  list-style: none;
  border-radius: 7px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px ${(props) => props.theme.shadow};
    z-index: 10;
  }
`;

export const PosterImage = styled.img`
  width: 230px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

export const MovieTitle = styled.h3`
  margin: 5px;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
`;

export const MovieRate = styled.span`
  background-color: #875dea;
  padding: 2px 7px;
  color: #f1f1f1;
  border-radius: 3px;
  font-size: 0.8rem;
  position: absolute;
  top: 15px;
  right: 15px;
`;

// Movie List
export const MovieCards = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 5px;
`;

// Movie Slide
export const SlideSection = styled.div`
  height: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

export const SlideInfo = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 40px;
  left: 100px;

  h2 {
    color: white;
    font-size: 60px;
    margin: 20px 0;
  }
  button {
    font-size: 1.1rem;
  }
`;

// Movie Detail
export const DetailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 왼쪽 정보, 오른쪽 포스터 정렬 */
  padding: 50px 80px;
  background: ${({ background }) => `url(${background}) center/cover no-repeat`}; /* 배경 설정 */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }
`;

export const DetailInfo = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DetailImage = styled.div`
  position: relative;
  z-index: 2;
  width: 250px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const DetailRate = styled.span`
  background-color: rgba(255, 255, 255, 0.5);
  width: 90px;
  padding: 2px 15px;
  color: #f1f1f1;
  border-radius: 3px;
  font-size: 0.9rem;
`;

export const DetailTitle = styled.h2`
  font-size: 2rem;
`;

export const DetailTagline = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  flex-grow: 1;
`;

export const DetailGenre = styled.div`
  font-weight: 500;
`;

export const DetailOverview = styled.div`
margin-top: 60px;
  overflow: scroll;
  line-height: 1.5;
  height: 100px;
`;
