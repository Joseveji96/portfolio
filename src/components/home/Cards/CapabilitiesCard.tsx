import { Capabilities } from '@/lib/data'
import React from 'react'
import Image from 'next/image'

const CapabilitiesCard = () => {
	return (
		<div className='mt-10'>
			{Capabilities.map((capability, index) => (
				<div key={index} className='w-full h-screen font-dm flex flex-col'>
					<div className='flex flex-row justify-between items-center'>
						<h3 className='font-medium text-8xl'>{capability.title}</h3>
						<h1 className='font-normal text-8xl'>{"<" + `${index + 1}` + ">"}</h1>
					</div>
					<div className='mt-5 h-[1.5px] bg-btnStackColor' />

					<div className='h-full flex flex-row justify-between'>
						<div className='flex flex-col justify-evenly'>
							<p className='font-medium text-4xl w-3/5'>{capability.description}</p>
							<div>
								<h2 className='font-normal text-2xl mb-2'>[Tech Stack]</h2>
								<div className='flex flex-row gap-3'>
									{capability.stack.map((tech) => (
										<div key={tech}>
											<h1 className='font-medium text-xl'>{"(" + tech + ")"}</h1>
										</div>
									))}
								</div>
							</div>
						</div>
						<Image src={capability.imageUrl} width={400} height={400} alt={capability.title + "Image"} 
						className='m-auto w-[400px] h-[400px]'
						style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default CapabilitiesCard