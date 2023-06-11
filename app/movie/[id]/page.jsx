import getMovie from "@/lib/GetMovie";
import getVideo from "@/lib/GetVideo";
import { MdStar } from "react-icons/md";

export default async function page({ params }) {
  // Getting the movie data from api 
  const movie = await getMovie(params.id)

  const { backdrop_path, poster_path, title, tagline, vote_average, vote_count, runtime, release_date, genres, overview, homepage, spoken_languages, id } = movie;

  // Getting the related video data from api
  const vidData = await getVideo(id);
  const vidId = vidData.results

  return (
    <div className="container mx-auto max-w-[1100px] relative">
      {/* movie Image backdrop  */}
      <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')` }} className={`w-full h-[600px] bg-center bg-cover bg-no-repeat`}>

        <div className="w-full h-full backdrop-brightness-50 flex justify-end items-start ">
        </div>

      </div>

      {/* Grid container for movie poster and its data */}
      <div className="relative p-8 transform translate-y-[-21%] sm:translate-y-[-30%] md:translate-x-[0%] grid grid-cols-1 md:grid-cols-3 md:place-items-start justify-center gap-12">

        {/* For the poster */}
        <div className="w-56">
          <img className="rounded-2xl w-full shadow-[2px_0px_40px_-12px_rgba(247,247,247,1)]" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
        </div>

        {/* For the movie data */}
        <div className="col-span-2">
          <h1 className="md:text-5xl text-3xl font-bold">{title}</h1>
          <p className="py-2 font-normal">{tagline}</p>
          <div className="flex items-center justify-between max-w-[200px]">
            <div className="flex items-center">{vote_average} <span className="pl-1"><MdStar size={20} color="yellow" /></span></div>
            <div>({vote_count}) votes</div>
          </div>
          <p className="py-1">Runtime: <span className="font-thin">{runtime} mins</span></p>
          <p>Release Date: <span className="font-thin">{release_date}</span> </p>
          <p className="py-1 flex flex-wrap">
            Languages: {spoken_languages && spoken_languages.map((language, index) => <span key={index} className="px-2 font-thin">{language.english_name}</span>)}
          </p>
          <div className="py-4 flex flex-row gap-2 flex-wrap">
            {genres && genres.map((genre, index) => {
              return <span key={index} className="p-2 mr-4 rounded-3xl border border-slate-50">{genre.name}</span>
            })}
          </div>
          <div className="py-12">
            <h3 className="text-2xl pb-4">Synopsis</h3>
            <p className="font-light">{overview}</p>
          </div>
            
          <h5 className="text-2xl pb-4">Watch related video:</h5>
          {
            vidId?.slice(0, 1).map(vid => {
              return <iframe className="w-[100%] my-4" width="1020" height="315"
                src={`https://www.youtube.com/embed/${vid.key}`}
                key={vid.key}>
              </iframe>
            })
          }
        </div>
      </div>
    </div>
  )
}

