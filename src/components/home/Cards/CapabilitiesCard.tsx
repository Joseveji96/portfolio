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
            style={{ 
              y,
            //   opacity,
            }}
            className='w-full h-screen font-dm flex flex-col bg-backgroundParallax mb-20 sticky top-0 p-12'
          >
            <motion.div 
              className='absolute inset-0 z-0'
              style={{ backgroundColor }}
            />
            <div className='relative z-10 flex flex-row justify-between items-center'>
              <h3 className='font-medium text-8xl'>{capability.title}</h3>
              <h1 className='font-normal text-8xl'>{"<" + `${index + 1}` + ">"}</h1>
            </div>
            <div className='relative z-10 mt-5 h-[1.5px] bg-btnStackColor' />
            
            <div className='relative z-10 h-full flex flex-row justify-between'>
              <div className='flex flex-col justify-evenly'>
                <p className='font-medium text-4xl w-3/5'>{capability.description}</p>
                <div>
                  <h2 className='font-normal text-2xl mb-2'>[Tech Stack]</h2>
                  <div className='flex flex-row gap-3'>
                    {capability.stack.map((tech) => (
                      <div key={tech}>
                        <h1 className='font-medium text-xl'>{"(" + tech + ")"}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Image 
                src={capability.imageUrl} 
                width={400} 
                height={400} 
                alt={capability.title + " Image"}
                className='m-auto w-[400px] h-[400px]'
                style={{
                  borderTopLeftRadius: 20, 
                  borderBottomLeftRadius: 20, 
                  borderBottomRightRadius: 20
                }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default CapabilitiesCard

