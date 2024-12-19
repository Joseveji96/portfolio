"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Capabilities from './Capabilities';
const Parallax = () => {
  return (
    <motion.div className="flex px-28 justify-center h-[1600px] mt-12 mb-52"
      initial={{ opacity: 1 }}
      whileInView={{
        opacity: 1,
        padding: 0,
        transition: {
          duration: 0.5,
        }
      }}

      viewport={{
        // once: true,
        // amount: 0.5,
        margin: "-200px 0px -400px 0px"

      }}>
      <motion.div className="h-full w-full bg-cover bg-center p-12 flex flex-col"
      // backgroundImage: 'url("/imgFond.jpg")',
        style={{ backgroundColor: "rgba(210, 210, 210, 1)",  borderRadius: 14 }}
        initial={{ opacity: 1 }}
        whileInView={{
          opacity: 1,
          padding: 90,
          borderRadius: 0,
          transition: {
            duration: 0.5,
          }
        }}
        viewport={{
          // once: true,
          // amount: 0.5,
          margin: "-200px 0px -600px 0px",

        }}
      >
        <Capabilities/>
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
