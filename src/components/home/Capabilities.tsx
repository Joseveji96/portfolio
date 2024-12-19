import React from 'react'
import Image from "next/image"

const Capabilities = () => {
    return (
        <div className='font-dm w-full h-2/5 flex flex-col'>
            <div className='w-fit'>
                <h1 className='text-9xl uppercase font-bold'>Capabilities</h1>
                <div className='mt-5 h-[1.5px] bg-[#555050]'/>
            </div>

            {/* Este div estará en la parte superior */}
            <div className='flex flex-col justify-between mt-7'>
                <div className='flex flex-row justify-between'>
                <p>In search to design & develop software that works efficiently, improves the
                    user experience and provides real value to companies.</p>
                <h2>[Areas of Approach]</h2>
                </div>
            </div>

            {/* Este div se empujará hacia el fondo del contenedor padre */}
            <div className='flex flex-row justify-between mt-auto'>
                <p>In search to design & develop software that works efficiently, improves the
                user experience and provides real value to companies.</p>
                <Image src={"/flor.svg"} alt={'Flor'} width={64} height={64} className="block 3xl:w-20 sticky top-[600px]"/>
            </div>
        </div>

    )
}

export default Capabilities