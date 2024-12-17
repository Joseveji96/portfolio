"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image"
// import TargetButtons from '../Botton/targetButtons';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { DiamondPlus } from 'lucide-react';


const Parallax = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
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
      <motion.div className="h-full w-full bg-cover bg-center p-12 flex justify-between"
        style={{ backgroundImage: 'url("/imgFond.jpg")', borderRadius: 14 }}
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
        <div className='flex flex-col '>
          <h1 className="text-8xl font-dm font-normal">About</h1>
          <Image
            src={"/flor.svg"}
            alt={'Flor'}
            width={66}
            height={64}
            className="block 3xl:w-20 sticky top-[600px]"
          />
        </div>
        <div className='max-w-[70%] font-dm'>
          <p className='text-3xl text-textColor font-light'>I&apos;m a software developer, specialized on web and mobile development with a focus on building innovative technology solutions.
            I&apos;m passionate about solving complex problems using modern technologies like JavaScript, React, Node.js, and Flutter.
            I&apos;m always looking for ways to streamline development and improve user experience.
          </p>
          <div className='mt-10'>
            <Accordion>
              <AccordionItem key="anchor" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"01"} title={<h1 className='text-3xl font-bold text-textColor'>Software Developer</h1>} >
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="full" aria-label="Full" indicator={<DiamondPlus />} startContent={"02"} title={<h1 className='text-3xl font-bold text-textColor'>Full Stack Developer</h1>} >
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="mobile" aria-label="Mobile" indicator={<DiamondPlus />} startContent={"03"} title={<h1 className='text-3xl font-bold text-textColor'>Mobile Developer</h1>} >
                {defaultContent}
              </AccordionItem>
              
            </Accordion>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
