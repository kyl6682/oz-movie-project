import { useSearchParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";
import Movie from "../components/movies/Movie";
import { PageWrapper } from "../style/CommonStyles";
import { MovieCards } from "../style/MovieStyles";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("movie") || "";
  const { filteredMovies, loading, error } = useSearchMovies(query);

  if (!query) return <p>검색어를 입력하세요.</p>;
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <PageWrapper>
      <h2 style={{marginTop: "40px"}}>"{query}" 검색 결과</h2>
      {filteredMovies.length > 0 ? (
        <MovieCards>
          {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieCards>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </PageWrapper>
  );
}

export default Search;
