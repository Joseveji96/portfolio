'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { DiamondPlus } from 'lucide-react';
import Image from "next/image";

export default function AboutSection() {
	return (
		<section className='p-12'>
			{/* Title */}
			<div className="flex justify-between items-end">
				<div className="text-9xl uppercase font-bold">
					<h1>Beyond</h1>
					<h1>The c<span>o</span>de</h1>
				</div>
				<h3 className="text-2xl">[About Me]</h3>
			</div>
			{/* Content */}
			<div className="flex justify-between">
				<div className='mt-10 w-3/5'>
					<p className="text-xl w-5/6 mb-10">I am a software developer, specialising in web and mobile development with a focus on building innovative technology solutions. I am passionate about solving complex problems. I am always looking for ways to streamline development and improve the user experience. </p>
					<h3 className="text-2xl mb-5">[ Another Experience ]</h3>
					<Accordion>
						<AccordionItem key="winner" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More"/>}  startContent={"2023"} title={<h1 className='text-2xl'>Winner of the Jalisco regional stage, InnovatecNM</h1>} >
							{/* {defaultContent} */} I competed and won in the Jalisco regional stage of the InnovaTecNM competition with the Tlaltec project. This was the first step after 1 year of research and a little more than 5 months of team development.
						</AccordionItem>
						<AccordionItem key="agile" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More"/>} startContent={"2023"} title={<h1 className='text-2xl'>I completed the Certification for the Scrum Methodology</h1>} >
							{/* {defaultContent} */} After seeing the complications of managing a project, I decided to become certified in the Scrum methodology, which has allowed me to develop projects efficiently and meet deadlines as a team.
						</AccordionItem>
						<AccordionItem key="winnerAgain" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More"/>}  startContent={"2024"} title={<h1 className='text-2xl'>Once again winner of the Jalisco regional stage, InnovatecNM</h1>} >
							{/* {defaultContent} */} Once again I competed and won in the Jalisco InnovaTecNM Regional stage with the Tlaltec project, including improvements such as climate prediction, mapped orchard registers, etc. I co-led the team and was the leader and responsible for the Artificial Vision area.
						</AccordionItem>
						<AccordionItem key="article" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More"/>}  startContent={"2024"} title={<h1 className='text-2xl'>Co-Wrote an article about Machine Vision</h1>} >
							{/* {defaultContent} */} I co-wrote together with teachers of the ITCG institution, a scientific paper about a training technique of an artificial vision model for detasets of less than 100 images for the detection of pests in avocado trees.
						</AccordionItem>
						<AccordionItem key="graduate" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More"/>}  startContent={"2024"} title={<h1 className='text-2xl'>Graduate of ING. Computer Systems (On hold)</h1>} >
						I am currently in the last semester of my degree, i.e. my residencies, where I am carrying out the creation of a CRM for the management of vegetable gardens. 
						</AccordionItem>
					</Accordion>
				</div>
				<div className="w-2/5 pl-10 pt-12">
					<Image src={"/a-person.png"} width={500} height={500} className="w-full h-full object-cover" alt="I" />
				</div>
			</div>
		</section>
	)
}