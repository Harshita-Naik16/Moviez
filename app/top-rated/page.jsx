
import Card from "@/components/Card";
import fetchApi from "@/lib/GetApi"
import Title from "@/components/Title";

export default async function page() {

  const data = await fetchApi("top_rated");
  const topRatedList = data.results;

  return (

    <div className="container max-w-[1100px] mx-auto text-center">
      <Title title="Top Rated" />
      <div className="container max-w-[1100px] mx-auto py-10 flex flex-wrap gap-4 justify-center">
        {
          topRatedList && topRatedList.map(movie => {
            return <Card key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>

  )
}
