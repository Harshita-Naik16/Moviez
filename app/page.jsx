import MovieList from "@/components/MovieList";
import Slider from "@/components/Slider"
import fetchApi from "@/lib/GetApi";

export default async function Home() {

  const data = await fetchApi("popular");
  const popularList = data.results;

  // Fetching data for the client component Slider
  const now_playingData = await fetchApi("now_playing");
  const now_playing = now_playingData.results;
  
  return (

    <main className="container mx-auto max-w-[1100px]">
      <Slider now_playing={now_playing}/>
      <MovieList movies={popularList}/>     
    </main>
  )
}


