import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("movie");
  console.log(param);
  return (
    <>
      <div>{param? (<p>검색어 : {param}</p>) : null}</div>
    </>
  );
}

export default Search;