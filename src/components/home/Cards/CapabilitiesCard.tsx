import { Capabilities } from '@/lib/data'
import React from 'react'
import Image from 'next/image'

const CapabilitiesCard = () => {
  return (
    <div>
      {Capabilities.map((capability, index) => (
        <div key={index}>
          <h3>{capability.title}</h3>
          <h1>{"<" + index + ">"}</h1>
          <div></div>
          <div>
            <p>{capability.description}</p>
            <div className='flex flex-row'>
              <h2>[Tech Stack]</h2>
              {capability.stack.map((tech) => (
                <div key={tech}>
                  <h2>{tech}</h2>
                </div>
              ))}
            </div>
          </div>
            <Image src={capability.imageUrl} width={400} height={400} alt={capability.title + "Image"}/>
        </div>
      ))}
    </div>
  )
}

export default CapabilitiesCard