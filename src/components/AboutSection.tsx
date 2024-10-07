"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import images from '../../public/images/pic 21.png'; 


const AboutSection = () => {
  
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <img src = "images/pic 21.png" alt= "about" />
       <div className='mt-4 md:mt-0 text-left flex flex-col h-full' > 
          <h2 className='sm:text-5xl text-5xl font-serif font-bold title-font text-white"'>About Me</h2>
          <br></br> 
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-white'>
          As a Full Stack Developer, I have honed my skills across both front-end and back-end development, ensuring comprehensive solutions for complex web applications.I am a dedicated web developer with a deep passion for crafting visually captivating and highly functional websites. Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks such as Next.js and Tailwind CSS, I excel at creating seamless user interfaces that enhance the browsing experience. My mission is to design innovative digital landscapes that engage users and deliver outstanding results. Driven by the challenge of pushing boundaries, I continually hone my skills to produce work that resonates long after it has been experienced.
          <br></br>
          Currently, my focus is on expanding my skill set. I am actively mastering new programming languages, exploring diverse courses, and delving into emerging technologies within the industry. Specifically, I am deeply engaged in Artificial Intelligence, Web 3.0, and the Metaverse.
          </p>
        </div> 
      </div> 
    </section>
  );
};

export default AboutSection;