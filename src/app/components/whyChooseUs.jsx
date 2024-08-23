"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Industry-Expert Instructors',
      description:
        'Learn from the best in the business. Our courses are led by industry professionals with years of experience in their fields, ensuring you gain real-world knowledge and actionable skills that are relevant and up-to-date.',
    },
    {
      title: 'Comprehensive Curriculum',
      description:
        'Our courses cover all the essentials and beyond, providing a thorough understanding of each subject. Whether it is SEO, PPC, E-commerce, CRO, or Personal Branding, we ensure you have all the tools you need to succeed',
    },
    {
      title: 'Practical, Hands-On Learning',
      description:
        'We emphasize practical learning with real-world applications. Our courses include interactive projects, case studies, and actionable strategies that you can apply immediately to achieve measurable results.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
    {
      title: 'Personalized Support and Feedback',
      description:
        'Your success is our priority. We offer personalized support and feedback throughout your learning journey, helping you overcome challenges and achieve your goals with confidence.',
    },
    {
      title: 'Up-to-Date Content',
      description:
        'he digital landscape is always changing, and so is our course content. We keep our material current with the latest trends and best practices, ensuring you are learning the most relevant skills to stay ahead in the industry.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs