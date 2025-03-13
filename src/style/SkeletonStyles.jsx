import styled, { keyframes } from "styled-components";
import { MovieCard, MovieTitle, PosterImage } from "./MovieStyles";

// 배경이 왼쪽에서 오른쪽으로 움직이는 효과
export const shimmer = keyframes`
    0% {background-position : -100px 0;}    // 0% → -100px에서 시작
    100%{background-position: 100px 0}      // 100% → 100px까지 이동
`;
export const SkeletonCard = styled(MovieCard)`
  background-color:#ddd;
`;

export const SkeletonImage = styled(PosterImage)`
  background: linear-gradient(90deg, #e0e0e0 25%, #e4e4e4 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;  // shimmer 애니메이션을 1.5초마다 반복 실행
`;

export const SkeletonTitle = styled(MovieTitle)`
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #e0e0e0 25%, #e4e4e4 50%, #e0e0e0 75%);
    border-radius: 4px;
    animation: ${shimmer} 1.5s infinite;  
`