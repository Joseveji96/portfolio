"use client";
import { motion } from 'framer-motion';
import React from 'react';
import  Image from "next/image"
// import TargetButtons from '../Botton/targetButtons';

const Parallax = () => {
  return (
    <motion.div className="flex px-28 justify-center h-[1600px] mt-12 mb-52"
    initial={{opacity: 1}}
        whileInView={{
          opacity: 1,
          padding: 0,
          transition: {
            duration: 2,
          }
        }}
        
        viewport={{
          // once: true,
          // amount: 0.5,
          margin: "-200px 0px -600px 0px"

        }}>
        <motion.div className="h-full w-full bg-cover bg-center p-12 flex justify-between" 
        style={{ backgroundImage: 'url("/imgFond.jpg")', borderRadius: 14}}
        initial={{opacity: 1}}
        whileInView={{
          opacity: 1,
          borderRadius: 0,
          transition: {
            duration: 2,
          }
        }}
        viewport={{
          // once: true,
          // amount: 0.5,
          margin: "-200px 0px -600px 0px",
          
        }}
        >
          <div className='flex flex-col '>
            <h1 className="text-8xl font-dm font-normal">About</h1>
            <Image  
								src={"/flor.svg"}
								alt={'Flor'}
								width={66}
								height={64}
								className="block 3xl:w-48 sticky top-[600px]"
							/>
          </div>
          <div className='w-[70%]'>
            <p>I&apos;m a software developer, specialized on web and mobile development with a focus on building innovative technology solutions. 
              I&apos;m passionate about solving complex problems using modern technologies like JavaScript, React, Node.js, and Flutter.
              I&apos;m always looking for ways to streamline development and improve user experience.
            </p>
            <div>
              {/* <TargetButtons/> */}
            </div>
          </div>
        </motion.div>
    </motion.div>
  );
};

export default Parallax;
