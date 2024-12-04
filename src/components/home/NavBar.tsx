import { Circle } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <header className="p-0 m-0 w-full h-32 flex items-center font-dm text-textColor font-bold text-[1.5rem]">
        <div className="w-full">
            <nav className="relative flex justify-between px-10 ">
                <a href="./">
                    Eduardo Developer
                </a>
                <ul className="list-none flex space-x-6"> 
                    <li><a className="" href="">What I Do</a></li>
                    <li><a className="" href="">Projects</a></li>
                    <li><a className="" href="">Method</a></li>
                    <li><a className="" href="">About</a></li>
                    <li><a className="" href="">Articles</a></li>
                </ul>
                <div className='flex gap-2'>
                    <a href="">Contact Me</a>
                    <button className="flex gap-2 justify-center items-center border-2 p-1 border-neutral-950 text-sm font-medium" 
                        style={{borderRadius: 18}}
                        aria-label="View Case Study">
                            Dark
                            <Circle width={16}/>
                    </button>
                </div>
            </nav>
        </div>
    </header>

  )
}

export default NavBar