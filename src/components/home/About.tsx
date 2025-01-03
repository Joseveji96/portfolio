'use client';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import WideDMSansO from "../common/components_WideDMSansO";


export default function AboutSection() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const oRef = useRef(null);
	const [oVisible, setOVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (oVisible && oRef.current) {
				const rect = oRef.current.getBoundingClientRect();
				const progress = Math.min(1, Math.max(0, 1 - (rect.top - 150) / window.innerHeight));
				setScrollProgress(progress);
			}
		};

	
		const observer = new IntersectionObserver(
			([entry]) => setOVisible(entry.isIntersecting),
			{ threshold: 0.1 }
		);

		if (oRef.current) {
			observer.observe(oRef.current);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (oRef.current) {
				observer.unobserve(oRef.current);
			}
		};
	}, [oVisible]);

	const baseWidth = 49;
	const minStretchWidth = 95;
	const maxStretchWidth = 300;
	const currentWidth = Math.max(
		minStretchWidth,
		maxStretchWidth - scrollProgress * (maxStretchWidth - minStretchWidth)
	);
	const height = 95;

	return (
		<section className="p-12">
			{/* Título */}
			<div className="flex justify-between items-end">
				<div className="text-9xl uppercase font-bold">
					<h1>Bey<motion.span
							ref={oRef}
							className="inline-block"
							style={{ height: `${height}px` }}
							aria-label={scrollProgress > 0.9 ? "o" : "extended o"}
							initial={{ width: maxStretchWidth }}
							animate={{ width: currentWidth }}
							transition={{
								duration: 0.01,
								ease: [0.25, 0.8, 0.25, 1],
							}}
						>
							<WideDMSansO width={currentWidth} height={height} style={"extra"} />
						</motion.span>nd</h1>
					<h1>The code
					</h1>
				</div>
				<h3 className="text-2xl">[About Me]</h3>
			</div>

			{/* Contenido */}
			<div className="flex justify-between">
				<div className="mt-10 w-3/5">
					<p className="text-xl w-5/6 mb-10">
						I am a software developer, specialising in web and mobile development with a focus on building innovative technology solutions. I am passionate about solving complex problems. I am always looking for ways to streamline development and improve the user experience.
					</p>
					<h3 className="text-2xl mb-5">[ Another Experience ]</h3>
					<Accordion>
						<AccordionItem key="winner" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More" />} startContent={"2023"} title={<h1 className='text-2xl'>Winner of the Jalisco regional stage, InnovatecNM</h1>} >
							I competed and won in the Jalisco regional stage of the InnovaTecNM competition with the Tlaltec project. This was the first step after 1 year of research and a little more than 5 months of team development.
						</AccordionItem>
						<AccordionItem key="agile" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More" />} startContent={"2023"} title={<h1 className='text-2xl'>I completed the Certification for the Scrum Methodology</h1>} >
							After seeing the complications of managing a project, I decided to become certified in the Scrum methodology, which has allowed me to develop projects efficiently and meet deadlines as a team.
						</AccordionItem>
						<AccordionItem key="winnerAgain" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-2xl'>Once again winner of the Jalisco regional stage, InnovatecNM</h1>} >
							Once again I competed and won in the Jalisco InnovaTecNM Regional stage with the Tlaltec project, including improvements such as climate prediction, mapped orchard registers, etc. I co-led the team and was the leader and responsible for the Artificial Vision area.
						</AccordionItem>
						<AccordionItem key="article" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-2xl'>Co-Wrote an article about Machine Vision</h1>} >
							I co-wrote together with teachers of the ITCG institution, a scientific paper about a training technique of an artificial vision model for detasets of less than 100 images for the detection of pests in avocado trees.
						</AccordionItem>
						<AccordionItem key="graduate" aria-label="Anchor" indicator={<Image src={"/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-2xl'>Graduate of ING. Computer Systems (On hold)</h1>} >
							I am currently in the last semester of my degree, i.e. my residencies, where I am carrying out the creation of a CRM for the management of vegetable gardens.
						</AccordionItem>
					</Accordion>
				</div>
				<div className="w-2/5 pl-10 pt-12">
					<Image src={"/a-person.png"} width={500} height={500} className="w-full h-full object-cover" alt="I" />
				</div>
			</div>
		</section>
	);
}
