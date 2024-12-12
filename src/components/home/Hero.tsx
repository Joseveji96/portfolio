"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Download, MoveDown } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { convertO, slideUp, slideUp2 } from "../hero/animation"
import BottonWork from '../Botton/BottonWork';

const Hero = () => {
	// Creamos una referencia para la imagen
	const imageRef = useRef(null);
	const [showVideo, setShowVideo] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowVideo(false);
		}, 5200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		gsap.to(imageRef.current, {
			rotation: 360,
			repeat: -1,
			duration: 20,
			ease: 'linear',
		});
	}, []);

	return (
		<section className='w-full text-textColor'>
			<div className='flex flex-col justify-center items-center gap-2'>
				<motion.div variants={slideUp2} initial="initial" animate="enter" className=' font-dm font-bold text-sm sm:text-6xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem] uppercase tracking-wide px-24 3xl:px-36'>
					<h1 className='pl-0'>EVERY PROJECT</h1>
					<div className='flex justify-center items-center pl-28'>
						<h1>Can be</h1>
						<motion.div variants={slideUp} initial="initial" animate="enter" className="mx-10">
							<Image
								ref={imageRef} // Referencia para GSAP
								src={"/flor.svg"}
								alt={'Flor'}
								width={154}
								height={154}
								className="block 3xl:w-48"
							/>
						</motion.div>
						<h1>a new</h1>

					</div>
				</motion.div>
				<div className='px-40 font-dm flex gap-20 3xl:gap-32'>
					<div className='flex flex-col gap-1 pt-3 pl-28 text-right font-normal sm:text-xl xl:text-2xl 3xl:text-3xl'>
						<h2 className='font-bold sm:text-lg xl:text-xl 3xl:text-2xl bg-clip-text text-transparent' style={{
							backgroundImage: 'linear-gradient(to right, #1D1D1D, #003659)', // Gradiente de izquierda a derecha
							WebkitBackgroundClip: 'text', // Soporte para navegadores Webkit
							WebkitTextFillColor: 'transparent', // Texto transparente para mostrar solo el gradiente
						}}>Hi! i´m Eduardo, A Web & Mobil developer</h2>
						<h2 className='-translate-x-44'>Let´s Transform <span className='font-extrabold text-[#524848]'>constraints</span> </h2>
						<div>
							<h2>into {"<"}code{"/>"} <span className="font-frank italic text-slate-50 px-3" style={{ backgroundImage: "url('/o.png')", backgroundSize: "cover", display: "inline-block", width: "auto", height: "100%", borderRadius: 10 }}>Mastepieces</span></h2>

						</div>
					</div>
					<h1 className='pt-2 font-light sm:text-6xl xl:text-7xl 2xl:text-9xl 3xl:text-9xl uppercase'>Hist
						<span className="relative inline-block">
							{showVideo ? (
								<motion.span
									variants={slideUp} initial="initial" animate="enter"
									className="relative w-full h-full flex justify-center items-center text-transparent transition-transform duration-1000 ease-in-out"
									style={{ WebkitTextFillColor: 'transparent' }}
								>
									o
									<motion.video
										variants={convertO} initial="initial" animate="enter"
										autoPlay
										loop
										muted
										className="absolute top-0 left-0 object-cover transition-transform transform duration-500 ease-in-out"
										style={{
											borderRadius: 60,
											opacity: showVideo ? 1 : 0,
											// transform: showVideo ? 'scale(1)' : 'scale(0.95)',
											top: '50%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
										}}
									>
										<source src="video.mp4" type="video/mp4" />
									</motion.video>
								</motion.span>
							) : (
								<span
									className="relative inline-block text-transparent bg-clip-text transition-all duration-500 ease-in-out"
									style={{
										backgroundImage: 'url("o.png")',
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										opacity: showVideo ? 0 : 1,
									}}
								>
									o
								</span>
							)}
						</span>

						ry</h1>
				</div>
			</div>
			<div className="h-10 flex justify-between items-center px-28 mt-10">
				<div className="flex gap-16 items-center">
					<button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
						Download CV
						<Download />
					</button>
					<button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
						Descargar CV
						<Download />
					</button>
				</div>
				<div className='flex gap-20'>
					<BottonWork />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className="mt-0 flex justify-center"
					>
						<motion.span
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="text-lg text-textColor md:text-xl"
						>
							<MoveDown strokeWidth={2} size={48} />
						</motion.span>
					</motion.div>
				</div>
			</div>


		</section>
	);
};

export default Hero;
