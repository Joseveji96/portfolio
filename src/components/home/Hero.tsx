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
		<section className='w-full'>
			<div className='px-36'>
				<h1>EVERY PROJECT</h1>
				<h1>Can be</h1>
				<Image src={"/flor.png"} width={150} height={150} alt='Flor'/>
				<h1 className='uppercase'>a new</h1>
			</div>
			<div className='px-28'>
				<h1>History</h1>
				<div className=''>
					<h2>Hi! i´m Eduardo, A Web & Mobil developer</h2>
					<h2>Let´s Transform constraints </h2>
					<div>
						<h2>into code</h2>
						<h1>Mastepieces</h1>
					</div>
				</div>
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
					<MoveDown strokeWidth={2} size={48}/>
				</div>

		</section>
	);
};

export default Hero;
