import MovieList from "@/components/MovieList";
import Title from "@/components/Title";
import fetchApi from "@/lib/GetApi"

export default async function page() {
  
  const data = await fetchApi("popular");
  const popularList = data.results;


  return (
    <div className="container max-w-[1100px] mx-auto text-center">
      <Title title="Popular" />
      <MovieList movies={popularList}/>
    </div>

  )
}
