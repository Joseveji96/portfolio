import Image from 'next/image'
import React from 'react'
const TargetButtons = () => {
  return (
    <div className='w-8 h-11 flex flex-row border-r-2 bg-[conic-gradient(from_90deg_at_50%_50%,#446790_0%,#565364_50%,#2076A1_100%)]'>
      <Image width={32} height={32} alt='ReactIcon' src={'/react.svg'}/>
      <h1 className='font-dm text-2xl'>React native</h1>
    </div>
  )
}

export default TargetButtons