"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Testimonials = [
    {
        quote: "The Email Marketing course was a game-changer for our business. The strategies were easy to implement, and the results were immediate. Our open rates and conversions have skyrocketed!",
        name: "Sarah Mitchell",
        title: "Marketing Director at BrightWave Solutions"
    },

    {
        quote: "Enrolling in the SMMA course was the best decision I made for my agency. The course provided practical insights and actionable strategies that helped me scale my business rapidly. Highly recommended!",
        name: "James Parker",
        title: "Founder & CEO of Digital Dominance Agency"


    },
    {
        quote: "This Agency course offered a comprehensive guide to building and managing a successful agency. The detailed modules and expert advice have been invaluable in streamlining our operations and increasing profitability.",
        name: "Emily Thompson",
        title: "Managing Partner at Apex Creative Group"

    },

    {
        quote: "The Copywriting course transformed my approach to crafting compelling content. The techniques and tips provided have not only improved my writing skills but also significantly boosted client engagement and sales.",
        name: "Michael Lee",
        title: "Senior Copywriter at Stellar Communications"
    },

    {
        quote: "The Sales course was exactly what I needed to boost my sales performance. The techniques and strategies shared are practical and easy to implement, leading to immediate improvements in my sales numbers.",
        name: "Mark Sullivan",
        title: "Sales Executive at Elite Tech Solutions"
    }
]

function MordernSchoolTesimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h1  className="text-3xl font-bold text-center mb-8 z-10">Testimonials: Voices of success</h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div  className="w-full max-w-6xl">
        <InfiniteMovingCards items={Testimonials} speed='slow' direction='right'/>
      </div>
      </div>
    </div>
  )
}

export default MordernSchoolTesimonials
