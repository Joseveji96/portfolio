"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Parallax = () => {
  return (
    <motion.div className="flex px-28 justify-center h-[600px] mt-12 mb-52"
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
        <motion.div className="h-full w-full bg-cover bg-center p-12" 
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
          <h1 className="text-8xl font-dm font-normal">About</h1>
          <p>I'm a software engineer based in Mexico</p>
        </motion.div>
    </motion.div>
  );
};

export default Parallax;
