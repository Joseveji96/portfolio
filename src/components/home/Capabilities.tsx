import React from 'react'
import Image from "next/image"
import { FaReact, FaJs, FaPython, FaJava } from 'react-icons/fa';
import { TbBrandCpp, TbBrandCSharp  } from "react-icons/tb";

export const lenguajesStack = [
    {
        name: "Typescript",
        icon: <FaReact />
    },
    {
        name: "JavaScript",
        icon: <FaJs />
    },
    {
        name: "Python",
        icon: <FaPython />
    },
    {
        name: "Java",
        icon: <FaJava />
    },
    {
        name: "C++",
        icon: <TbBrandCpp />
    },
    {
        name: "C#",
        icon: <TbBrandCSharp /> 
    }
]
const Capabilities = () => {
    return (
        <div className='font-dm w-full h-2/5 flex flex-col pb-10 border-b-2 border-[#a2a2a2d6]'>
            <div className='w-fit'>
                <h1 className='text-9xl uppercase font-bold'>Capabilities</h1>
                <div className='mt-5 h-[1.5px] bg-[#555050]' />
            </div>

            {/* Capabilities P */}
            <div className='flex flex-col justify-between mt-7'>
                <div className='flex flex-row justify-between'>
                    <p className='text-4xl font-semibold w-4/5'>In search to design & develop software that works efficiently, improves the
                        user experience and provides real value to companies.</p>
                    <h2 className='text-2xl text-[#153647]'>[Areas of Approach]</h2>
                </div>
            </div>

            {/* Tech Lenguajes Stack */}
            <div className='flex flex-row justify-between mt-32'>
                <div>
                    <h2 className='text-2xl mb-7'>{"<Tech Lenguajes>"}</h2>
                    <div className='flex flex-row space-x-3'>
                        {lenguajesStack.map((lenguaje, index) => (
                            <div key={index} title={lenguaje.name} className='h-10 flex items-center gap-3 border-2 border-btnStackColor p-2 rounded-xl'>
                                {lenguaje.icon} {lenguaje.name}
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={"/flor.svg"} alt={'Flor'} width={64} height={64} className="block 3xl:w-20 sticky top-[600px]" />
            </div>
        </div>

    )
}

export default Capabilities