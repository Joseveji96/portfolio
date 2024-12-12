import { Circle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const NavBar = () => {
    const [onDarkTheme, setOnDarkTheme] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isHovered && titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const distanceX = e.clientX - centerX
                const distanceY = e.clientY - centerY
                titleRef.current.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.2}px)`
            }
        }

        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove)
        }else if (titleRef.current) {
            titleRef.current.style.transform = 'translate(0, 0)'
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isHovered])

    return (
        <header className="px-28 m-0 w-full h-32 flex items-center font-dm text-textColor font-medium text-[1.5rem]">
            <div className="w-full">
                <nav className="relative flex justify-between">
                    <a ref={titleRef} href="./" className="transition-all duration-300 ease-out transform hover:scale-110" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        Eduardo <span className='text-[#524848]'>(Developer)</span>
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
                            style={{ borderRadius: 18 }}
                            onClick={() => setOnDarkTheme(!onDarkTheme)}
                            aria-label="View Case Study">
                            {
                                onDarkTheme ?
                                    <h1>Dark</h1>
                                    :
                                    <h1>Light</h1>
                            }
                            <Circle width={16} height={16} style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} />
                        </button>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default NavBar