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
							<Image src={project.img} alt={project.title} width={900} height={0} className='absolute h-full object-cover opacity-80' style={{ borderRadius: 8 }} />
							<div className='absolute z-10 flex flex-col gap-4'>
								<div className='flex flex-col gap-2 w-[90%] justify-center m-auto'>
									<div className={`w-fit font-medium text-2xl uppercase px-3 flex items-center rounded-medium`} style={{ backgroundColor: project.backgroundColor }}>
										<h3 className='leading-none'>{project.sector}</h3>
									</div>
									<div className='flex gap-2'>
										{project.workOn.map((work, id) => (
											<div key={id} className='bg-blurDark w-fit text-white font-medium text-lg uppercase px-2 flex items-center rounded-medium'>
												{work}
											</div>
										))}
									</div>
								</div>
								<video src={project.video} autoPlay loop muted className='relative z-10 self-center' width="90%" style={{ borderRadius: 12 }} />
							</div>
						</div>
						<div className='flex justify-between items-center mt-4'>
							<h1 className='text-3xl font-semibold'>{project.title}</h1>
							<p>{project.date}</p>
						</div>
					</div>
					<div className='flex flex-col align-end w-[45%] items-end'>
						<h1 className='text-[200px] font-semibold leading-none mb-10'>0{project.id}.</h1>
						<p className='text-lg font-light max-w-[80%] text-right mb-16'>{project.description}</p>
						<h1 className='mb-6'> {"{"} <span className='font-semibold'>GENERAL STACK</span> {"}"} </h1>
						<div>
							<div className='flex flex-wrap justify-end'>
								{project.stackUX.map((stack, id) => (
									<span key={id} className='mr-2'>({stack})</span>
								))}
							</div>
							<div className='flex flex-wrap justify-end'>
								{project.stackFront.map((stack, id) => (
									<span key={id} className='mr-2'>({stack})</span>
								))}
							</div>
							<div className='flex flex-wrap justify-end'>
								{project.stackBack.map((stack, id) => (
									<span key={id} className='mr-2'>({stack})</span>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default RecentProjects