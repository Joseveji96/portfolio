import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { proyects } from '@/lib/data';
import FlipNumber from '../common/FlipNumber';

const RecentProjects = () => {
	const [activeProject, setActiveProject] = useState(0);
	const projectRefs = useRef([]);
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;

		const handleScroll = () => {
			if (!section) return;

			const sectionRect = section.getBoundingClientRect();
			// Solo procesar el scroll cuando la sección está visible
			if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
				projectRefs.current.forEach((ref, index) => {
					if (ref) {
						const rect = ref.getBoundingClientRect();
						// Considera un proyecto "activo" cuando su centro está cerca del centro de la pantalla
						if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
							setActiveProject(index);
						}
					}
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="font-dm w-full">
			{/* Header Section */}
			<div className="mb-10 flex flex-col pb-10 border-b-2 border-[#a2a2a2d6]">
				<div className="w-fit">
					<h1 className="text-9xl uppercase font-bold">Recent Projects</h1>
					<div className="mt-5 h-[1.5px] bg-[#555050]" />
				</div>

				<div className="flex flex-col justify-between mt-7">
					<div className="flex flex-row justify-between">
						<h2 className="text-2xl text-[#153647]">[Selected Works]</h2>
						<p className="text-4xl font-semibold w-4/5">
							Carefully selected projects, created with dedication and passion to achieve significant results and leave a mark.
						</p>
					</div>
				</div>
			</div>

			{/* Projects Section */}
			<div ref={sectionRef} className="relative flex">
				{/* Scrolling Projects Container */}
				<div className="w-[55%]">
					{proyects.map((project, id) => (
						<div
							key={id}
							ref={el => projectRefs.current[id] = el}
							className="min-h-screen mb-20"
						>
							<div className="h-screen flex flex-col">
								<div className="relative w-full h-[90%]">
									<Image
										src={project.img}
										alt={project.title}
										width={900}
										height={0}
										className="absolute h-full w-full object-cover opacity-80"
										style={{ borderRadius: 8 }}
									/>
									{/* Work */}
									<div className="absolute inset-0 z-10 flex flex-col gap-10 items-center justify-center">
										<div className="flex flex-col gap-2 w-[90%] justify-center">
											<div
												className="w-fit font-medium text-2xl uppercase px-3 flex items-center rounded-medium"
												style={{ backgroundColor: project.backgroundColor }}
											>
												<h3 className="leading-none">{project.sector}</h3>
											</div>
											<div className="flex gap-2">
												{project.workOn.map((work, idx) => (
													<div
														key={idx}
														className="bg-blurDark w-fit text-white font-medium text-lg uppercase px-2 flex items-center rounded-medium"
													>
														{work}
													</div>
												))}
											</div>
										</div>
										<video
											src={project.video}
											autoPlay
											loop
											muted
											className="relative z-10 self-center"
											width="90%"
											style={{ borderRadius: 12 }}
										/>
									</div>
								</div>
								{/* Titulo Proyecto */}
								<div className='w-full flex flex-row items-center justify-between mt-6'>
									<h1 className='text-3xl font-semibold'>{project.title}</h1>
									<h2>{project.date}</h2>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Fixed Info Container */}
				<div className="w-[45%] sticky top-0 h-screen">
					<div className="h-full">
						<div className="flex flex-col w-full h-full ">
							<div className="transition-all duration-500 transform flex flex-col h-full justify-between">
								<div>
									<FlipNumber number={proyects[activeProject].id} />
									<div className='flex w-full justify-end'>
										<p className="text-xl font-extralight w-[80%] text-right mb-16">
											{proyects[activeProject].description}
										</p>
									</div>
								</div>

								<div className='mb-10'>
									<h1 className="mb-4 w-full flex justify-end text-2xl">
										{"{"} <span className="font-semibold">GENERAL STACK</span> {"}"}
									</h1>

									<div className='font-extralight text-xl'>
										<div className="flex flex-wrap justify-end">
											{proyects[activeProject].stackUX.map((stack, idx) => (
												<span key={idx} className="mr-2">
													({stack})
												</span>
											))}
										</div>
										<div className="flex flex-wrap justify-end">
											{proyects[activeProject].stackFront.map((stack, idx) => (
												<span key={idx} className="mr-2">
													({stack})
												</span>
											))}
										</div>
										<div className="flex flex-wrap justify-end">
											{proyects[activeProject].stackBack.map((stack, idx) => (
												<span key={idx} className="mr-2">
													({stack})
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentProjects;