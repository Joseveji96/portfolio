"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FadeText } from '../ui/fade-text';
import { Download, MoveDown } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { slideUp } from "../hero/animation"
// import { ScrollTrigger } from 'gsap/all';

const Hero = () => {
	// Creamos una referencia para la imagen
	const imageRef = useRef(null);
	const [showVideo, setShowVideo] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowVideo(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Configuramos la rotación continua con GSAP
		gsap.to(imageRef.current, {
			rotation: 360,  // Rotar 360 grados
			repeat: -1,     // Repetir infinitamente
			duration: 10,   // Duración de 10 segundos para una rotación completa
			ease: 'linear', // Animación lineal para rotar uniformemente
		});
	}, []);




	return (
		<div className="relative px-[80px]">
			<div className="flex flex-col 2xl:px-[30px] 3xl:px-[60px]">
				<FadeText
					className="font-dm leading-tight text-[9rem] 3xl:text-[12rem] font-semibold text-textColor dark:text-white"
					direction="up"
					framerProps={{
						show: { transition: { delay: 0.3 } },
					}}
					text="EVERY PROJECT"
				/>
				{/* Añadimos la referencia a la imagen */}
				<motion.div variants={slideUp} initial="initial" animate="enter" className="absolute flex items-center justify-center -right-16  3xl:-right-32 transform -translate-x-1/2">
					<Image
						ref={imageRef} // Referencia para GSAP
						src={'/x1.png'}
						alt={'Shape1'}
						width={200}
						height={200}
						className="block 3xl:w-72"
					/>
				</motion.div>

				<div className="flex justify-between">
					<div className="flex flex-col justify-end h-full">
						<div className="pt-20 p-10 3xl:px-0">
							<FadeText
								className="font-frank leading-[0px] text-[40px] font-medium text-textColor"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0.3 } },
								}}
								text="Let´s Transform"
							/>
							<FadeText
								className="font-frank leading-[70px] text-[40px] font-medium  text-textRed"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0.2 } },
								}}
								text="Constraints"
							/>
							<FadeText
								className="font-frank leading-[30px] text-[40px] font-medium text-textColor"
								direction="left"
								framerProps={{
									show: { transition: { delay: 0.3 } },
								}}
								text={
									<>
										<div className="relative bg-background">
											<motion.div
												className="font-frank leading-[30px] text-[40px] font-medium text-textColor"
												initial={{ opacity: 1 }}
												animate={{ opacity: 1 }}
											>
												Into Code{' '}
												<div className="relative w-60 h-7 ">
													{showVideo && (
														<video 
														autoPlay
														loop
														muted
														className="absolute top-0 left-0 w-full h-full object-cover"
														>
														<source src="/video.mp4" type="video/mp4" />
														</video>
													)}
													<div className='relative w-full h-full  '>
														<h1 className="font-bold italic font-frank text-[40px] text-white bg-background mix-blend-multiply">
															Masterpieces
														</h1>
													</div>
												</div>
											</motion.div>
										</div>
									</>
								}
							/>

							
							{/* <div className="relative bg-background">
								<div className="w-auto h-14 flex justify-center">
									<video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
										<source src="/video.mp4" type="video/mp4"/>
									</video>
										<h1 className=" relative font-bold italic font-frank text-[40px] text-white bg-background mix-blend-multiply">
											Masterpieces
										</h1>
									
								</div>
							</div> */}
								


						</div>
					</div>

					<FadeText
						className="font-dm text-[8rem] 3xl:text-[12rem] font-semibold text-textColor"
						direction="up"
						framerProps={{
							show: { transition: { delay: 0.3 } },
						}}
						text="IS A HISTORY"
					/>
				</div>

				<div className="h-20 flex justify-between items-center px-16">
					<div className="flex gap-16">
						<button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
							Download CV
							<Download />
						</button>
						<button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
							Descargar CV
							<Download />
						</button>
					</div>
					<FadeText
						className="font-frank leading-[30px] text-[40px] font-medium text-textColor"
						direction="down"
						framerProps={{
							show: { transition: { delay: 0.4 } },
						}}
						text={<MoveDown strokeWidth={2} size={48} />}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
