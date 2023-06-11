
import Card from "@/components/Card";
import Title from "@/components/Title";
import fetchApi from "@/lib/GetApi"

export default async function page() {
  
  const data = await fetchApi("popular");
  const popularList = data.results;


  return (
    <div className="container max-w-[1100px] mx-auto text-center">
      <Title title="Popular" />
      <div className="py-10 flex flex-wrap gap-4 justify-center">
        {
          popularList && popularList.map(movie => {
            return <Card key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>

  )
}
