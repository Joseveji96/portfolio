"use client"

import { Circle, Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
    const [onDarkTheme, setOnDarkTheme] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        } else if (titleRef.current) {
            titleRef.current.style.transform = 'translate(0, 0)'
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isHovered])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header className="px-4 sm:px-6 md:px-8 lg:px-16 m-0 w-full h-20 lg:h-32 flex items-center font-dm text-textColor font-medium text-sm sm:text-base md:text-lg lg:text-xl" id='hero'>
            <div className="w-full relative">
                <nav className="relative flex justify-between items-center">
                    <a 
                        ref={titleRef} 
                        href="./" 
                        className="transition-all duration-300 ease-out transform hover:scale-110" 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Eduardo <span className='text-[#524848]'>(Developer)</span>
                    </a>

                    {/* Mobile menu button */}
                    <button 
                        className="lg:hidden z-50"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Desktop menu */}
                    <div className='hidden lg:flex lg:items-center lg:space-x-4'>
                        <ul className="list-none flex space-x-4">
                            <li><a className="navbar-link" href="">Projects</a></li>
                            <li><a className="navbar-link" href="">Method</a></li>
                            <li><a className="navbar-link" href="">About</a></li>
                            <li><a className="navbar-link" href="">Articles</a></li>
                        </ul>
                        <a className='navbar-link' href="">Contact Me</a>
                        <button 
                            className="flex gap-4 justify-center items-center border-2 py-1 px-2 border-black text-sm font-extrabold"
                            style={{ borderRadius: 18 }}
                            onClick={() => setOnDarkTheme(!onDarkTheme)}
                            aria-label="Toggle theme"
                        >
                            {onDarkTheme ? <h1>Dark</h1> : <h1>Light</h1>}
                            <Circle 
                                width={12} 
                                height={12} 
                                style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} 
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                                onClick={toggleMobileMenu}
                            />
                            <motion.div 
                                className="lg:hidden p-2 absolute top-full right-5 bg-white shadow-md z-50 rounded-xl overflow-hidden"
                                initial={{ opacity: 0, y: -20, width: 0, height: 0 }}
                                animate={{ opacity: 1, y: 0, width: "auto", height: "auto" }}
                                exit={{ opacity: 0, y: -20, width: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="flex flex-col py-4 px-6 space-y-4">
                                    <li><a className="navbar-link" href="">Projects</a></li>
                                    <li><a className="navbar-link" href="">Method</a></li>
                                    <li><a className="navbar-link" href="">About</a></li>
                                    <li><a className="navbar-link" href="">Articles</a></li>
                                    <li><a className="navbar-link" href="">Contact Me</a></li>
                                    <li>
                                        <button 
                                            className="flex gap-2 justify-center items-center border-2 py-1 px-2 border-black text-sm font-extrabold w-full"
                                            style={{ borderRadius: 18 }}
                                            onClick={() => setOnDarkTheme(!onDarkTheme)}
                                            aria-label="Toggle theme"
                                        >
                                            {onDarkTheme ? <h1>Dark</h1> : <h1>Light</h1>}
                                            <Circle 
                                                width={12} 
                                                height={12} 
                                                style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} 
                                            />
                                        </button>
                                    </li>
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default NavBar

