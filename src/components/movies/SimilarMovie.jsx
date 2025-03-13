import MovieList from "./MovieList";

function SimilarMovie() {
  return (
    <>
      <h2
      style={{
        marginTop: "40px"
      }}
      >비슷한 장르의 영화</h2>
      <MovieList />
    </>
  );
}

export default SimilarMovie