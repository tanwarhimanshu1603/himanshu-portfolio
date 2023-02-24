import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav,setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]


  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
        <div>
            <h1 className="text-5xl font-signature cursor-pointer ml-2">Himanshu</h1>
        </div>
        
        <ul className="hidden md:flex">

            {links.map(({id,link})=>(
                <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:text-gray-300 capitalize hover:scale-105 duration-100">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={()=>setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
            {
                nav ? <FaTimes size={30}/> : <FaBars size={30}/>
            }
        </div>
        {nav && (
            <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id,link})=>(
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                    <li key={id} className="px-4 cursor-pointer py-6 capitalize hover:text-gray-400 hover:scale-105 duration-100 text-4xl">
                        {link}
                    </li>
                </Link>
            ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar