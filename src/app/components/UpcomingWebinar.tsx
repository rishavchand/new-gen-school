"use client"
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'

const webinars = [
    {
        title: 'Social Media Marketing Mastery',
        description: 'Unlock the secrets to growing and managing a successful social media presence with expert strategies and tools.',
        link: 'social-media-marketing-mastery',
        isFeatured: true,
      },
      {
        title: 'Advanced Sales Techniques',
        description: 'Enhance your sales skills with advanced strategies and tactics to close more deals and drive revenue.',
        link: 'advanced-sales-techniques',
        isFeatured: true,
      },
      {
        title: 'Effective Copywriting Strategies',
        description: 'Master the art of crafting persuasive and engaging copy that converts readers into customers.',
        link: 'effective-copywriting-strategies',
        isFeatured: true,
      },
      {
        title: 'Agency Growth Blueprint',
        description: 'Learn the essential strategies and best practices to scale and manage a successful agency.',
        link: 'agency-growth-blueprint',
        isFeatured: true,
      },
      {
        title: 'Digital Marketing Fundamentals',
        description: 'Get a comprehensive overview of digital marketing techniques and tools to boost your online presence.',
        link: 'digital-marketing-fundamentals',
        isFeatured: true,
      },
      {
        title: 'Email Marketing Success',
        description: 'Discover how to create effective email campaigns that engage subscribers and drive conversions.',
        link: 'email-marketing-success',
        isFeatured: true,
      }
      
]


function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
        <h1  className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinars
        </h1>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> 
            be ready to get success
        </p>
        </div>
        <HoverEffect items={webinars}/>

        <div>

        </div>

        <div className="mt-10 text-center">
            <Link href = {"/"}  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            See all
            </Link>
        </div>
    </div>
    </div>
  )
}

export default UpcomingWebinar
