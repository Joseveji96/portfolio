import { social } from '@/lib/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='p-12 bg-[#161616]'>
        {/* Header Footer */}
        <div className='flex items-end justify-between mb-24'>
            <div className='w-fit'>
                <h1 className='font-bold text-8xl mt-2 text-white uppercase'>i´m ready to work</h1>
                <div className='bg-white w-auto h-[0.5px]'/>
            </div>
            <div className='flex flex-col text-white border border-white w-fit text-base text-center uppercase' style={{borderRadius: "5px"}}>
                <Link 
                    href="#" 
                    className="block w-full h-full px-10 py-2 text-center hover:bg-slate-50 hover:text-black transition-colors"
                >
                    DESCARGAR CV
                </Link>
                <div className="h-px bg-white" />
                <Link 
                    href="#" 
                    className="block w-full h-full px-4 py-2 text-center hover:bg-slate-50 hover:text-black transition-colors"
                >
                    Go to Linkdin
                </Link>
            </div>
        </div>

        <div className='text-white flex justify-between'>
            <div className='w-[50%] flex flex-row justify-between font-light text-xl items-start uppercase'>
                <div>
                    <div>
                        <h1>Social</h1>
                        <div className="h-px bg-white mb-5 mt-1" />
                    </div>
                    <ul className='space-y-1'>
                        <li><a className="navbar-link-white" href={social.github}>Github</a></li>
                        <li><a className="navbar-link-white" href={social.linkedin}>Linkedin</a></li>
                        <li><a className="navbar-link-white" href={social.x}>X</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h1>Menu</h1>
                        <div className="h-px bg-white mb-5 mt-1" />
                    </div>
                    <ul className='space-y-1'>
                        <li><a className="navbar-link-white" href="">Home</a></li>
                        <li><a className="navbar-link-white" href="#recent-projects">Projects</a></li>
                        <li><a className="navbar-link-white" href="">Method</a></li>
                        <li><a className="navbar-link-white" href="">About</a></li>
                        <li><a className="navbar-link-white" href="">Articles</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h1>Open to talk</h1>
                        <div className="h-px bg-white mb-5 mt-1" />
                    </div>
                    <ul>
                        <li><a href={social.github}>joseveji96@gmail.com</a></li>
                    </ul>
                </div>  
            </div>
            
            
            {/* Copyright */}
            <div className="text-right text-3xl text-gray-400 z-50 flex flex-col items-end">
                <p>&copy; 2024 EDUARDO VELAZCO</p>
                <p>All Rights reserved</p>
                <Link href="#hero" className='px-5 w-20 py-4 border rounded-xl border-white mt-10 flex justify-center hover:bg-zinc-800 transition-colors'>
                    <Image src={"/up.svg"} width={22} height={22} alt='up'/>
                </Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer