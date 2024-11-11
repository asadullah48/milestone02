// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
// import images from '../../../public/asad.png';


// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "../../../utils/motion";
// import { SparklesIcon } from "@heroicons/react/16/solid";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// const HeroContent = () => {
//     return (
//       <section className='lg:py-23'>
//         <section className="flex flex-col sm:flex-row items-center justify-between">
//           <motion.div
//            initial = {{opacity: 0, scale: 0.5}} 
//            animate={{opacity: 1, scale: 1}} 
//            transition={{duration: 0.5}} 
//           className="sm:w-7/12 text-center sm:text-left justify-self-start">
//             <h1 className="text-white mb-4 text-1xl sm:text-2xl lg:text-3xl lg:leading-normal font-bold">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-600">
//                 Hi, I am { }
//            </span>
//               <br />
//               <TypeAnimation sequence ={[
//                   'Asadullah Shafique',
//                   1000,
//                   'Textile Engineer Cum Full-Stack Developer',
//                   900,
//                   'Freelancer',
//                   1000,
//                   'New Technology Enthusiastic',
//                   900,
//                   'Video Editor',
//                   1000
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 className="inline-block text-4xl sm:text-5xl lg:text-6xl"
//               />
//             </h1>
//             <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//               "Welcome! Explore below to learn about my skills, projects, and how I can help bring your ideas to life."
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
//               <a 
//               href="https://www.linkedin.com/in/asadullah-shafique-a00679325/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 mb-3 sm:mb-0 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
//               >
                
//                 Contact Me
//               </a>
//               <a 
//                 href="https://drive.google.com/drive/u/0/home" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
//               >
//                 <span className="block bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500">
//                   Download CV
//                 </span>
//               </a>
//             </div>
//           </motion.div>
//           <motion.div
//            initial = {{opacity: 0, scale: 0.5}} 
//            animate={{opacity: 1, scale: 1}} 
//            transition={{duration: 0.5}} 
//            className="sm:w-5/12 flex justify-center mt-6 sm:mt-0">
//             <div className="square-full bg-[#181818] w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] relative flex items-center justify-center mt-4 sm:mt-8 lg:mt-12">
//               <Image 
//                 src= {images}
//                 alt="profile"
//                 className="absolute w-[90%] h-[90%] lg:w-[95%] lg:h-[95%]"
//                 width={1000}
//                 height={1000}
//               />
//             </div>
//           </motion.div>
//         </section>
//       </section>
//     );
//   };
  
//   export default HeroContent;
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
const HeroContent = () => {
  return (
    // <section className='lg:py-23'>
    // //         <section className="flex flex-col sm:flex-row items-center justify-between">
    // //           <motion.div
    // //            initial = {{opacity: 0, scale: 0.5}} 
    // //            animate={{opacity: 1, scale: 1}} 
    // //            transition={{duration: 0.5}} 
    // //           className="sm:w-7/12 text-center sm:text-left justify-self-start">
    // //             <h1 className="text-white mb-4 text-1xl sm:text-2xl lg:text-3xl lg:leading-normal font-bold">
    // //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-600">
    // //                 Hi, I am { }
    // //            </span>
    // //               <br />
    // //               <TypeAnimation sequence ={[
    // //                   'Asadullah Shafique',
    // //                   1000,
    // //                   'Textile Engineer Cum Full-Stack Developer',
    // //                   900,
    // //                   'Freelancer',
    // //                   1000,
    // //                   'New Technology Enthusiastic',
    // //                   900,
    // //                   'Video Editor',
    // //                   1000
    // //                 ]}
    // //                 wrapper="span"
    // //                 speed={50}
    // //                 repeat={Infinity}
    // //                 className="inline-block text-4xl sm:text-5xl lg:text-6xl"
    // //               />
    // //             </h1>
    // //             <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
    // //               "Welcome! Explore below to learn about my skills, projects, and how I can help bring your ideas to life."
    // //             </p>
    // //             <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
    // //               <a 
    // //               href="https://www.linkedin.com/in/asadullah-shafique-a00679325/" 
    // //                 target="_blank" 
    // //                 rel="noopener noreferrer"
    // //                 className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 mb-3 sm:mb-0 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
    // //               >
                    
    // //                 Contact Me
    // //               </a>
    // //               <a 
    // //                 href="https://drive.google.com/drive/u/0/home" 
    // //                 target="_blank" 
    // //                 rel="noopener noreferrer"
    // //                 className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
    // //               >
    // //                 <span className="block bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500">
    // //                   Download CV
    // //                 </span>
    // //               </a>
    // //             </div>
    // //           </motion.div>
    // //           <motion.div
    // //            initial = {{opacity: 0, scale: 0.5}} 
    // //            animate={{opacity: 1, scale: 1}} 
    // //            transition={{duration: 0.5}} 
    // //            className="sm:w-5/12 flex justify-center mt-6 sm:mt-0">
    // //             <div className="square-full bg-[#181818] w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] relative flex items-center justify-center mt-4 sm:mt-8 lg:mt-12">
    // //               <Image 
    // //                 src= {images}
    // //                 alt="profile"
    // //                 className="absolute w-[90%] h-[90%] lg:w-[95%] lg:h-[95%]"
    // //                 width={1000}
    // //                 height={1000}
    // //               />
    // //             </div>
    // //           </motion.div>
    <motion.div
      initial="hidden"
      animate="visible"
      className="wrapper flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-gray-200 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-bold px-2">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="leading-tight">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              the best{" "}
            </span>
            Project Experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px] text-justify"
        >
          Welcome to my portfolio! I am Asadullah Shafique, a passionate web developer
          and aspiring <span className="font-bold">CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER.</span>  My
          portfolio showcases a range of projects built using cutting-edge
          technologies like Next.js. Through continuous learning and hands-on
          experience, I am committed to enhancing user experiences and solving
          real-world problems with innovative web solutions.
        </motion.p>
        {/* Download CV Button */}
        <motion.div variants={slideInFromLeft(1)}>
          <Link href={"/cv/Resume-CV.pdf"} target="_blank" passHref>
            <Button className="text-gray-200 text-lg bg-[#2A0E61] hover:translate-y-1  hover:duration-500 cursor-pointer rounded-lg py-2">
              Download CV
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src={"/mainIconsdark.svg"}
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;