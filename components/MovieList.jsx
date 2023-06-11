import Card from "./Card"

export default function MovieList({movies}) {
  return (
    <div className="mx-auto py-10 flex flex-wrap gap-4 justify-center">
        {
          movies && movies.map(movie => {
            return <Card key={movie.id} movie={movie} />
          })
        }
    </div>
  )
}
