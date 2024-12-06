import { Circle } from 'lucide-react'
import React, { useState } from 'react'

const NavBar = () => {
    const [onDarkTheme, setOnDarkTheme] = useState(false);
    return (
        <header className="px-28 m-0 w-full h-32 flex items-center font-dm text-textColor font-medium text-[1.5rem]">
            <div className="w-full">
                <nav className="relative flex justify-between">
                    <a href="./">
                        Eduardo Developer
                    </a>
                    
                    <div className='flex space-x-6'>
                        <ul className="list-none flex space-x-6"> 
                            <li><a className="" href="">Projects</a></li>
                            <li><a className="" href="">Method</a></li>
                            <li><a className="" href="">About</a></li>
                            <li><a className="" href="">Articles</a></li>
                        </ul>
                        <a href="">Contact Me</a>
                        <button className="flex gap-4 justify-center items-center border-2 py-[5px] px-[10px] border-black text-sm font-extrabold" 
                            style={{borderRadius: 18}}
                            onClick={() => setOnDarkTheme(!onDarkTheme)}
                            aria-label="View Case Study">
                                {
                                    onDarkTheme ?
                                        <h1>Dark</h1>
                                    :
                                        <h1>Light</h1>   
                                }
                                <Circle width={16} height={16}  style={ onDarkTheme ?  {backgroundColor: "black", borderRadius: 100} : {}}/>
                        </button>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default NavBar