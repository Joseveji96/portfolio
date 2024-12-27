import React from 'react'
import BtnTitle from '../common/BtnTitle'
import Image from 'next/image'
import ButtonStroke from '../Botton/ButtonStroke'

const Articles = () => {
  return (
    <section className='p-16 w-auto m-auto'>
      <div className='mb-14'>
        <h1 className='font-medium text-6xl uppercase'>Written <span className='font-bold text-9xl'>Articles</span></h1>
      </div>
      <div className='bg-blue-200 p-12' style={{backgroundImage: 'url(/fondo-VA.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: "10px"}}> 
        {/* Mide todo el ancho del componente */}
        <div className='flex gap-5 mb-12'>
          {/* Imagen Logo */}
          <Image
            src={"/flor.svg"}
            alt={'Flor'}
            width={32}
            height={32}
            className="block 3xl:w-48"
          />
          <BtnTitle title='VISION ARTIFICIAL'/>
        </div>

        {/* Contenido */}
        <div className='flex justify-between mb-12'>
          {/* Title */}
          <div className='w-2/5'>
            <p className='font-normal text-3xl text-white uppercase'>Is it possible to 
              create computer vision with 
              more than <span> 70% accuracy </span>
              with datasets 
              <span>less than 100 images</span>?</p>
          </div>
      
          {/* campos */}
          <div className=' flex flex-col gap-2'>
            <ButtonStroke title='Field detection' className='-translate-x-14'/>
            <ButtonStroke title='Auto Labeling' className='-translate-x-1'/>
            <ButtonStroke title='Small Dataset' className='-translate-x-20'/>
          </div>
        </div>

        {/* Info -> Mide todo el ancho del componente */}
        <div className='text-end font-dm text-white'>
          <h2 className='italic text-3xl uppercase'>Quick Answer, Yes.</h2>
          <p className='text-xl decoration-zinc-50'><a href="#" ></a>Find out more here</p>
        </div>

      </div>
    </section>
  )
}

export default Articles