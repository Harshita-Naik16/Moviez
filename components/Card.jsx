import Link from 'next/link';
import { MdStar } from "react-icons/md";

export default function Card({ movie }) {
    const { poster_path, title, release_date, vote_average, overview, id } = movie;

    return (

        <Link href={`/movie/${id}`} className="w-48 rounded-2xl cursor-pointer relative group overflow-hidden border-gray-600 border hover:scale-110 transition duration-100 hover:z-10">
            <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
            <div className="hidden p-4 group-hover:flex duration-100 absolute w-full h-full bg-gradient-to-t from-black/90 bottom-0  flex-col justify-end">
                <h3 className="font-bold text-xl">{title}</h3>
                <div className="flex items-center py-2 text-sm">
                    <span>{release_date}</span>
                    <div className="flex items-center px-2 mx-3">
                        <span className="px-1">{vote_average}</span>
                        <span><MdStar size={24} /></span>
                    </div>
                </div>
                <p className='italic font-extralight text-xs'>{overview.slice(0, 100) + "..."}</p>
            </div>
        </Link>

    )
}



