
import Card from "@/components/Card";
import fetchApi from "@/lib/GetApi"
import Title from "@/components/Title";
import MovieList from "@/components/MovieList";

export default async function page() {

  const data = await fetchApi("upcoming");
  const upcomingList = data.results;

  return (
    <div className="container max-w-[1100px] mx-auto text-center">
      <Title title="Upcoming" />
      <MovieList movies={upcomingList}/>
    </div>
  )
}
