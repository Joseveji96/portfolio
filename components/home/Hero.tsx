import React from 'react'
import { FadeText } from '../ui/fade-text'
import { Download, MoveDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="px-[80px] pt-10">
            <div className="flex flex-col">
                <FadeText
                    className="font-frank text-[128px] font-medium text-textColor dark:text-white"
                    direction="up"
                    framerProps={{
                        show: { transition: { delay: 0.3 } },
                    }}
                    text="EVERY PROJECT"
                />

                
                <div className='flex justify-between'>
                    {/* Transform Masterpieces */}
                    <div className="flex flex-col justify-end h-full">
                        <div className="pt-20 p-10">
                        <FadeText
                            className="font-frank leading-[0px] text-[40px] font-medium text-textColor"
                            direction="left"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="Transforming"
                        />
                        <FadeText
                            className="font-frank leading-[70px] text-[40px] font-medium  text-textRed"
                            direction="left"
                            framerProps={{
                                show: { transition: { delay: 0.2 } },
                            }}
                            text="constraints"
                        />
                        <FadeText
                            className="font-frank leading-[30px] text-[40px] font-medium text-textColor"
                            direction="left"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text={
                                <>
                                into code{' '}
                                <span className="font-bold italic">
                                    masterpieces
                                </span>
                                </>
                            }
                            />
                        </div>
                    </div>

                    <FadeText
                        className="font-frank text-[128px] font-medium text-textColor"
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.3 } },
                        }}
                        text="IS A HISTORY"
                    />
                </div>
                
                <div className='h-20 flex justify-between items-center px-16'>
                    <div className='flex gap-16'>
                        <button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
                            Download CV
                            <Download />
                        </button>
                        <button className="font-inter text-[18px] font-extrabold hover:underline decoration-2 flex gap-2">
                            Descargar CV
                            <Download />
                        </button>
                    </div>
                    <FadeText
                            className="font-frank leading-[30px] text-[40px] font-medium text-textColor"
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.4 } },
                            }}
                            text={
                                <MoveDown strokeWidth={2} size={48}/>
                            }
                            />
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
