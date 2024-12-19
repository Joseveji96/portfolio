'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { DiamondPlus } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className='flex flex-row justify-between'>
      <div className='flex flex-col'>
        <h1 className="text-8xl font-dm font-normal">About</h1>
        {/* <Image src={"/flor.svg"} alt={'Flor'} width={66} height={64} className="block 3xl:w-20 sticky top-[600px]"/> */}
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
    </section>
  )
}

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

