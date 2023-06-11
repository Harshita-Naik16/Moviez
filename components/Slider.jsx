"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdStar } from "react-icons/md";
import { RxDotFilled, RxDot } from "react-icons/rx";

export default function Slider({now_playing}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nowPlayingList, setNowPlayingList] = useState();

    useEffect(() => {
        setNowPlayingList(now_playing)
    }, [])

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? nowPlayingList.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const newIndex = currentIndex === nowPlayingList.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const movie = nowPlayingList && nowPlayingList[currentIndex]

    return (

        <div className=" h-[500px] relative group transition mx-4 lg:m-0">
            {nowPlayingList && <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')` }} className="w-full bg-center bg-cover object-contain bg-no-repeat h-full rounded-2xl transition duration-500 ease-in-out">
                <Link href={`/movie/${movie.id}`} className="w-full h-full bg-gradient-to-t from-black/90 flex items-end p-12">
                    <div>
                        <h2 className="font-bold md:text-6xl text-2xl">{movie.title}</h2>
                        <div className="flex items-center md:py-6 py-2 md:text-2xl text-sm">
                            <span>{movie.release_date}</span>
                            <div className="flex items-center px-2 mx-6">
                                <span className="px-1">{movie.vote_average}</span>
                                <span><MdStar size={35} color="yellow"/></span>
                            </div>
                        </div>
                        <p className='max-w-[600px] text-xs italic font-extralight'>{movie.overview}</p>
                    </div>
                </Link>
            </div>}

            {/* left arrow */}
            <div className="group-hover:block hover:bg-black/20 rounded-full absolute cursor-pointer translate-y-[-50%] top-[50%] m-1 transition-100" onClick={prevSlide}>
                <MdNavigateBefore size={30} />
            </div>

            {/* right arrow */}
            <div className="group-hover:block hover:bg-black/20  rounded-full absolute cursor-pointer translate-y-[-50%] top-[50%] right-0 m-1 transition-100" onClick={nextSlide}>
                <MdNavigateNext size={30} />
            </div>

            <div className="flex md:px-2 px-1 py-4 justify-center items-center mx-auto">
                {
                    nowPlayingList && nowPlayingList.map((dot, index) => (
                        <div key={index} className="cursor-pointer" onClick={() => setCurrentIndex(index)}>{currentIndex == index ? <RxDotFilled className="w-5" /> : <RxDot className="w-3" />}</div>
                    ))
                }
            </div>
        </div>


    )
}
