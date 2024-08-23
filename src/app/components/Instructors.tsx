"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Image from 'next/image'



const instructors = [
    {
      id: 1,
      name: 'Iman Gadzhi',
      designation: 'Agency Expert',
      image:
      '/images/ImanGadzhi.jpeg',
    },
    {
      id: 2,
      name: 'Luis Berger',
      designation: 'Copywriting Specialist',
      image:
      '/images/LouisBerger.jpeg',

     
    },
    {
      id: 3,
      name: 'Boyuan Zhao',
      designation: 'Email Marketing Expert',
      image:
      '/images/BoyuanZhao.jpeg',

     
    },
    {
      id: 4,
      name: 'Sophie Patel',
      designation: 'Digital Marketing Strategist',
      image:
      '/images/SophiePatel.jpeg',


    },
];


function InstructorsDetail() {
  return (
    <div  className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your skill mastering journey</p>
       


           <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
           </div>
      </WavyBackground>
    </div>
  )
}

export default InstructorsDetail
