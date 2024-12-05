"use client"
import React, { useRef, useMemo } from 'react'
import { Github, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion"

// TypeScript Interface for Strong Typing
interface CardProps {
  i: number;
  title: string;
  sector: string;
  description: string;
  image: string;
  imageAlt: string;
  backgroundColor: string;
}

const generateNoiseBackground = () => {
  return `url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
};

const Card: React.FC<CardProps> = React.memo(({
  i, 
  title, 
  sector, 
  description, 
  image, 
  imageAlt, 
  backgroundColor
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const backgroundStyles = useMemo(() => ({
    borderRadius: '14px',
    backgroundColor: backgroundColor,
    backgroundImage: [
      generateNoiseBackground(),
      'radial-gradient(circle at 94% 95%, hsla(170, 88%, 68%, 1) 3%, transparent 76%)',
      'radial-gradient(circle at 89% 34%, hsla(263, 96%, 51%, 1) 1%, transparent 86%)',
      'radial-gradient(circle at 86% 50%, hsla(318, 80%, 65%, 1) 7%, transparent 76%)',
      'radial-gradient(circle at 89% 79%, hsla(248, 76%, 53%, 1) 7%, transparent 87%)',
      'radial-gradient(circle at 15% 44%, hsla(4, 74%, 80%, 1) 15%, transparent 81%)',
      'radial-gradient(circle at 99% 20%, hsla(75, 88%, 92%, 1) 1%, transparent 68%)'
    ].join(', '),
    backgroundBlendMode: 'overlay, normal, normal, normal, normal, normal, normal',
    backgroundSize: 'cover'
  }), [backgroundColor]);

  return (
    <div 
      ref={container} 
      className='parallax-card-end flex justify-center h-[600px] my-10 mb-32 last:mb-0 sticky' 
      style={{ top: `calc(50px + ${i * 10}px)` }}
    >
      <div 
        className="w-[85%] p-12 rounded-sm shadow-lg" 
        style={backgroundStyles}
      >
        <div className="flex h-[100%] justify-between">
          <div className="w-[40%] flex flex-col justify-between">
            <div>
              <h1 className='font-inter text-5xl font-bold'>{title}</h1>
              <h2 className='font-inter text-2xl font-semibold pt-2'>{sector}</h2>
              <p className='font-inter pt-5'>{description}</p>
            </div>
            <div className='flex gap-5'>
              <button 
                className="flex gap-2 justify-center items-center border-2 p-2 border-neutral-600" 
                style={{borderRadius: 6}}
                aria-label="View Case Study"
              >
                View Case Study
                <MoveUpRight size={14} />
              </button>
              <button 
                className="flex gap-2 justify-center items-center border-2 p-2 border-neutral-100" 
                style={{borderRadius: 18}}
                aria-label="GitHub Repository"
              >
                <Github />
              </button>
            </div>
          </div>
          <div className="w-[50%] overflow-hidden">
            <motion.div style={{scale}}>
              <Image
                src={image}
                alt={imageAlt}
                width={700}
                height={700}
                // placeholder="blur"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;