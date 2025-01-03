"use client"

import { Capabilities } from '@/lib/data'
import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const CapabilitiesCard = () => {
  const containerRef = React.useRef(null)
  
  return (
    <div ref={containerRef} className='relative'>
      {Capabilities.map((capability, index) => {
        const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: [`start start`, `end start`]
        })

        const y = useTransform(scrollYProgress, 
          [index / Capabilities.length, (index + 1) / Capabilities.length], 
          ['0%', '-40%']
        )
        const opacity = useTransform(scrollYProgress, 
          [index / Capabilities.length, (index + 1) / Capabilities.length], 
          [1, 0]
        )
        const backgroundColor = useTransform(
          scrollYProgress,
          [index / Capabilities.length, (index + 0.6) / Capabilities.length],
          ['rgba(204, 204, 204, 0)', 'rgba(100, 100, 100, 0.5)']
        )

        return (
          <motion.div 
            key={index} 
            style={{ y }}
            className='w-full min-h-screen font-dm flex flex-col bg-backgroundParallax mb-10 lg:mb-20 sticky top-0 p-4 sm:p-8 md:p-10 lg:p-12'
          >
            <motion.div 
              className='absolute inset-0 z-0'
              style={{ backgroundColor }}
            />
            <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center'>
              <h3 className='font-medium text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-2'>{capability.title}</h3>
              <h1 className='font-normal text-3xl sm:text-4xl md:text-6xl lg:text-8xl'>{"<" + `${index + 1}` + ">"}</h1>
            </div>
            <div className='relative z-10 mt-3 lg:mt-5 h-[1.5px] bg-btnStackColor' />
            
            <div className='relative z-10 h-full flex flex-col lg:flex-row justify-between mt-6'>
              <div className='flex flex-col justify-evenly max-lg:h-full'>
                <p className='font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-3/5 mb-6'>{capability.description}</p>
                <div className='mt-6 lg:mt-0'>
                  <h2 className='font-normal text-lg sm:text-xl md:text-2xl lg:text-2xl mb-3'>[Tech Stack]</h2>
                  <div className='flex flex-wrap lg:flex-nowrap gap-3'>
                    {capability.stack.map((tech) => (
                      <div key={tech}>
                        <h1 className='font-medium text-base sm:text-lg md:text-xl lg:text-xl'>{"(" + tech + ")"}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-auto flex justify-center items-center mt-8'>
                <Image 
                  src={capability.imageUrl} 
                  width={400} 
                  height={400} 
                  alt={capability.title + " Image"}
                  className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:w-[400px] h-auto lg:h-[400px] object-cover'
                  style={{
                    borderTopLeftRadius: 20, 
                    borderBottomLeftRadius: 20, 
                    borderBottomRightRadius: 20
                  }}
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default CapabilitiesCard

