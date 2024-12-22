import { proyects } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const RecentProjects = () => {
	return (
		<div className='font-dm w-full'>
			<div className="mb-10 flex flex-col pb-10 border-b-2 border-[#a2a2a2d6]">
				<div className='w-fit'>
					<h1 className='text-9xl uppercase font-bold'>Recent Projects</h1>
					<div className='mt-5 h-[1.5px] bg-[#555050]' />
				</div>

				{/* Capabilities P */}
				<div className='flex flex-col justify-between mt-7'>
					<div className='flex flex-row justify-between'>
						<h2 className='text-2xl text-[#153647]'>[Selected Works]</h2>
						<p className='text-4xl font-semibold w-4/5'> Carefully selected projects, created with dedication and passion to achieve significant results and leave a mark. </p>
					</div>
				</div>
			</div>
			{proyects.map((project, id) => (
				<div key={id} className='flex flex-row justify-between h-screen mb-20'>
					<div className='w-[55%]'>
						<div className='h-[90%] relative flex items-center justify-center'>
							<Image src="/fondo-vid.jpg" alt={project.title} width={900} height={0} className='absolute h-full object-cover opacity-80' style={{borderRadius: 8}} />
							<video src={project.video} autoPlay loop muted className='relative z-10' width="90%" style={{borderRadius: 12}}/>
						</div>
						<div className='flex'>
						<h1>{project.title}</h1>
						<h3>{project.sector}</h3>
							<p>{project.date}</p>
							{project.workOn.map((work, id) => (
								<div key={id}>
									{work}
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col align-end w-[45%] items-end'>	
						<h1 className='text-[200px] font-semibold leading-none mb-10'>0{project.id}.</h1>
						<p className='text-lg font-light max-w-[80%] text-right'>{project.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default RecentProjects