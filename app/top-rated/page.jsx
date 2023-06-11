import fetchApi from "@/lib/GetApi"
import Title from "@/components/Title";
import MovieList from "@/components/MovieList";

export default async function page() {

  const data = await fetchApi("top_rated");
  const topRatedList = data.results;

  return (

    <div className="container max-w-[1100px] mx-auto text-center">
      <Title title="Top Rated" />
      <MovieList movies={topRatedList}/>
    </div>

  )
}
