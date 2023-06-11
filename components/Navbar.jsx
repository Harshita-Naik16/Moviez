'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import { useState } from 'react';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  const navList = [
    {
      name: "Popular",
      link: "/popular"
    },
    {
      name: "Top Rated",
      link: "/top-rated"
    },
    {
      name: "Upcoming",
      link: "/upcoming"
    },
  ]

  return (
    <header className="container mx-auto max-w-[1100px] shadow-md md:px-4 lg:p-0">
      <nav className="flex flex-row justify-between py-5 md:py-10 gap-8 items-center px-4 md:px-0 relative mb-6">
        <Link href={"/"}  className="p-2 bg-yellow-500 text-black font-bold md:text-2xl text-xl rounded">Moviez</Link>

        <ul className={`nav-menu-md flex z-[1] absolute p-8 text-center backdrop-blur-md  flex-col w-full h-screen top-[100%] left-0 ${toggleMenu ? '' : 'md:flex hidden'}`}>
          {
            navList.map((item, index) => {
              return (
                <li key={index} className={`${pathname == item.link ? "text-red-800" : ""} hover:text-red-800 transition font-semibold md:ml-6 my-4 text-lg`}>
                  <Link href={item.link} onClick={() => setToggleMenu(prev => !prev)}>
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <button className='md:hidden' onClick={() => setToggleMenu(prev => !prev)}>{toggleMenu ? <RxCross2 size={25}/> : <RxHamburgerMenu size={25}/>}</button>
      </nav>
    </header>
  )
}