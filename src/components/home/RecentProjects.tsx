import { proyects } from '@/lib/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='mb-96'>
      <div className="font-dm w-full h-2/5 flex flex-col pb-10 border-b-2 border-[#a2a2a2d6]">
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
            <div key={id}>
                <div>
                  <h1>{project.id}</h1>
                  <h2>{project.description}</h2>
                </div>
                <div>
                  <div>
                    <video src={project.video} autoPlay/>
                    <h1>{project.title}</h1>
                    <h3>{project.sector}</h3>
                  </div>
                  <div>
                      <p>{project.date}</p>
                      {project.workOn.map((work, id) => (
                        <div key={id}>
                          {work}
                        </div>
                      ))}
                  </div>
                </div>
            </div>
          ))}
    </div>
  )
}

export default RecentProjects