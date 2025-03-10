import { useSearchParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";
import Movie from "../components/Movie";
import styled from "styled-components";


const MovieCards = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("movie") || "";
  const { filteredMovies, loading, error } = useSearchMovies(query);

  if (!query) return <p>검색어를 입력하세요.</p>;
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div>
      <h2>"{query}" 검색 결과</h2>
      {filteredMovies.length > 0 ? (
        <MovieCards>
          {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieCards>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default Search;
