'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { DiamondPlus } from 'lucide-react';
import Image from "next/image";

export default function AboutSection() {
	return (
		<section className='p-12'>
			{/* Title */}
			<div>
				<div>
					<h1>Beyond</h1>
					<h1>The c<span>o</span>de</h1>
				</div>
				<h3>[About Me]</h3>
			</div>
			{/* Content */}
			<div>
				<div className='mt-10'>
					<p>I am a software developer, specialising in web and mobile development with a focus on building innovative technology solutions. I am passionate about solving complex problems. I am always looking for ways to streamline development and improve the user experience. </p>
					<h3>[ Experience of my capabilities ]</h3>
					<Accordion>
						<AccordionItem key="winner" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"2021"} title={<h1 className=''>Winner of the Jalisco regional stage, InnovatecNM</h1>} >
							{/* {defaultContent} */} Hola
						</AccordionItem>
						<AccordionItem key="agile" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"2021"} title={<h1 className=''>I completed the Certification for the Scrum Methodology</h1>} >
							{/* {defaultContent} */} Hola
						</AccordionItem>
						<AccordionItem key="winnerAgain" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"2021"} title={<h1 className=''>Once again winner of the Jalisco regional stage, InnovatecNM</h1>} >
							{/* {defaultContent} */} Hola
						</AccordionItem>
						<AccordionItem key="article" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"2021"} title={<h1 className=''>Co-Wrote an article about Machine Vision</h1>} >
							{/* {defaultContent} */} Hola
						</AccordionItem>
						<AccordionItem key="graduate" aria-label="Anchor" indicator={<DiamondPlus />} startContent={"2021"} title={<h1 className=''>Graduate of ING. Computer Systems (On hold)</h1>} >
							{/* {defaultContent} */} Hola
						</AccordionItem>
					</Accordion>
				</div>
				<div>
					<Image src={"/fondo-VA.jpg"} width={0} height={0} alt="I"/>
				</div>
			</div>
		</section>
	)
}