import React from 'react'

const NavBar = () => {
  return (
    <header className="p-0 m-0 w-full h-32 flex items-center font-inter text-textColor font-bold text-[1.5rem]">
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
                <a href="">Contact Me</a>
            </nav>
        </div>
    </header>

  )
}

export default NavBar