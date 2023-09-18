'use client'
import Image from 'next/image'
import React, { useEffect, useState,useRef } from 'react';
import VideoCollection from '../components/VideoCollection'
import FlipCard from '../components/Car'
import VideoPlayer from '@/components/Homevideo';
import { getVideoData } from '../public/videoUrl/url';
import MainText from "../components/MainText"
import AboutUs from '../components/About-us'
import ServiceNiche from '../components/Service-Niche'
import AboutUssm from '../components/About-us-sm'
import BVideoCarousel from '@/components/ButtonCarousel'
import VideoCarousel from '@/components/VideoCarousel';
import WeHaveWorkedWith from '@/components/WeHaveWorkedWith'





export default  function Home() {
  const [scroll1, setScroll1] = useState(false);
  const [scroll2, setScroll2] = useState(false);
  const [scroll3, setScroll3] = useState(false);


  useEffect(() => {
    if (scroll1) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 3400, behavior: 'smooth' });
      setScroll1(false)
    }
  }, [scroll1]);

  useEffect(() => {
    if (scroll2) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 4100, behavior: 'smooth' });
      setScroll2(false)
    }
  }, [scroll2]);

  useEffect(() => {
    if (scroll3) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 4800, behavior: 'smooth' });
      setScroll2(false)
    }
  }, [scroll3]);

  
  const videoURL = [
      '/video/video1.mp4' ,
      '/video/video1.mp4' ,
     '/video/video1.mp4' ,
     '/video/video1.mp4' ,
     
    // Add more video URLs as needed
  ];

  const videoURLS=[
    "/CollectionVideos/Short 1.mp4",
    "/CollectionVideos/Short 2.mp4",
    "/CollectionVideos/Short 3.mp4",
    "/CollectionVideos/Short 4.mp4",
  ]
  
  const videoURLT=[
    "/CollectionVideos/Trailer 1.mp4",
    "/CollectionVideos/Trailer 2.mp4",
    "/CollectionVideos/Trailer 3.mp4",
    "/CollectionVideos/Trailer 4.mp4",
  ]

  const videoURLL=[
    "/CollectionVideos/Long 1.mp4",
    "/CollectionVideos/Long 2.mp4",
    "/CollectionVideos/Long 3.mp4",
  ]

  return (
    <main className=' flex flex-col'>
      {/* <VideoPlayer videoSrc={url} /> */}
      
      <MainText/>
      
      <VideoPlayer/>

      <BVideoCarousel videoURLs={videoURL} tittle='Shorts/Reels'/>
      <BVideoCarousel videoURLs={videoURL} tittle='Podcast/Trailer'/>
      <BVideoCarousel videoURLs={videoURL} tittle='Long Form'/>
      <div className=' md:flex flex-wrap justify-center bg-black  hidden '>
      <FlipCard  frontContent="Shorts/Reels" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video1.mp4" // Replace this with the relevant information
        thumbnail="/thumb1.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        scroll={scroll1}
        setScroll={setScroll1}
        />
      <FlipCard  frontContent="Podcast/Trailers" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video1.mp4" // Replace this with the relevant information
        thumbnail="/thumb2.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        scroll={scroll2}
        setScroll={setScroll2}
        />
      <FlipCard  frontContent="Long Form" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video1.mp4" // Replace this with the relevant information
        thumbnail="/thumb3.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        scroll={scroll3}
        setScroll={setScroll3}
        />
      </div>
      {/* <AboutUs/> */}
      <AboutUssm/>

      <ServiceNiche/>

      <VideoCollection videoURL={videoURL}/>
      

      {/* <WeHaveWorkedWith/> */}

      <div className=" flex  justify-center bg-black mt-20">
        <div className='flex flex-col text-white'>
        <p className=' text-2xl pt-10 animate-charcter'>packages starting from $999/Month</p>
        <button className="hover:animate-none animate-pulse sm:text-3xl hover:font-bold ml-16 hover:text-cyan text-white border-heather xl:my-10 lg:my-10 sm:w-96 sm:h-16 xs:w-72 xs:h-12 xs:text-2xl  w-60 h-8 text-xl hover:border-white border-2 mx-2 rounded-xl hover:bg-black ">
          <a href='/pages/CalendlyButton' className=''>
            <h1 className=' ml-1 '> BOOK A FREE CALL</h1>
        
            
          </a>
        </button>
        <p className=' text-xs mx-40'>VidualizeStudio@gmail.com</p>
        </div>
        
      </div>

        {/* <div className='justify-center md:flex hidden mt-10'>
        <h1 className='text-black text-3xl '>Shorts and Reels Collection</h1>
        </div>
        <VideoCarousel videoSrc={videoURL} />

        <div className='justify-center md:flex hidden mt-24'>
        <h1 className='text-black text-3xl'>Podcast and Trailers Collection</h1>
        </div>
        <VideoCarousel videoSrc={videoURL} />

        <div className='justify-center md:flex hidden mt-24'>
        <h1 className='text-black text-3xl'>Long Form Collection</h1>
        </div>
        <VideoCarousel videoSrc={videoURL} /> */}
        
        






      
      
    </main>
  )
}
