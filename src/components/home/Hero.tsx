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
		}, 5200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Configuramos la rotación continua con GSAP
		gsap.to(imageRef.current, {
			rotation: 360,  // Rotar 360 grados
			repeat: -1,     // Repetir infinitamente
			duration: 20,   // Duración de 10 segundos para una rotación completa
			ease: 'linear', // Animación lineal para rotar uniformemente
		});
	}, []);




	return (
		<section className='w-full text-textColor'>
			<div className='px-28  font-dm font-bold text-9xl uppercase'>
				<h1 className='pl-16'>EVERY PROJECT</h1>
				<div className='flex pl-32'>
					<h1>Can be</h1>
					<motion.div variants={slideUp} initial="initial" animate="enter" className="mx-12">
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
			</div>
			<div className='px-56 w-full font-dm flex gap-11'>
				<div className='text-right font-normal text-3xl'>
					<h2 className='font-bold text-2xl bg-clip-text text-transparent' style={{
						backgroundImage: 'linear-gradient(to right, #346FB1, #0C2E44)', // Gradiente de izquierda a derecha
						WebkitBackgroundClip: 'text', // Soporte para navegadores Webkit
						WebkitTextFillColor: 'transparent', // Texto transparente para mostrar solo el gradiente
					}}>Hi! i´m Eduardo, A Web & Mobil developer</h2>
					<h2>Let´s Transform <span className='font-extrabold text-[#AF2121]'>constraints</span> </h2>
					<div>
						<h2>into code</h2>
						<h1>Mastepieces</h1>
					</div>
				</div>
				<h1 className='font-light text-9xl uppercase'>Hist
					<span className="relative inline-block">
						{showVideo ? (
							<span
								className="relative inline-block text-transparent transition-all duration-500 ease-in-out"
								style={{ WebkitTextFillColor: 'transparent' }}
							>
								o
								<video
									autoPlay
									loop
									muted
									className="absolute top-0 left-0 w-full h-full object-cover transition-transform transform duration-500 ease-in-out"
									style={{ borderRadius: 50, opacity: showVideo ? 1 : 0, transform: showVideo ? 'scale(1)' : 'scale(0.95)' }}
								>
									<source src="video.mp4" type="video/mp4" />
								</video>
							</span>
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
			<div className="">
				<div className="">
					<button className="">
						Download CV
						<Download />
					</button>
					<button className="">
						Descargar CV
						<Download />
					</button>
				</div>
				<MoveDown strokeWidth={2} size={48} />
			</div>

		</section>
	);
};

export default Hero;
