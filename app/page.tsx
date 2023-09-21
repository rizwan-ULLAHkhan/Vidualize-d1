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
import LongformCarousel from '../components/LongformCarousel'
import LongformBCarousel from '../components/LongformBCarousel'





export default  function Home() {
  const [scroll1, setScroll1] = useState(false);
  const [scroll2, setScroll2] = useState(false);
  const [scroll3, setScroll3] = useState(false);


  useEffect(() => {
    if (scroll1) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 3320, behavior: 'smooth' });
      setScroll1(false)
    }
  }, [scroll1]);

  useEffect(() => {
    if (scroll2) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 3980, behavior: 'smooth' });
      setScroll2(false)
    }
  }, [scroll2]);

  useEffect(() => {
    if (scroll3) {
      // Scroll to a specific position (e.g., y-coordinate 500)
      window.scrollTo({ top: 4850, behavior: 'smooth' });
      setScroll2(false)
    }
  }, [scroll3]);

  
  const videoURL = [
    "https://cdn.sanity.io/files/r9425prr/production/a084910b18edcc15566aac6d58525d6c891ca713.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/a084910b18edcc15566aac6d58525d6c891ca713.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/a084910b18edcc15566aac6d58525d6c891ca713.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/a084910b18edcc15566aac6d58525d6c891ca713.mp4",
     
    // Add more video URLs as needed
  ];


  const fetchVideoData = async () => {
    // You can perform asynchronous operations here
    try {
      const data = await getVideoData(); // Replace with your actual async operation
      console.log(data)
       const url= `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/ ${data[3]}.mp4`
      return url;
      // Handle the response as needed
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };
  useEffect(() => {
    // Call your asynchronous function here
    fetchVideoData();
  }, []);

  const videoURLS=[
    "https://cdn.sanity.io/files/r9425prr/production/a084910b18edcc15566aac6d58525d6c891ca713.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/ee30cf377c7ab566931f5105ffdd690631daa6d0.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/e2cf562b55b7b78e781364c0cbbb6ae89ed8ccf6.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/0fec17bb9c7a299acba3027b678f1ea706350121.mp4",
   
  ]
  
  const videoURLT=[
    "https://cdn.sanity.io/files/r9425prr/production/478e3cf9047adc7facf38d0367a3e9189ed6c5ba.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/e0c8e84192585caf4a537894790f3eb20ce582e7.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/b0f107f98b4d61808ebcf33d876e008e7163749b.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/82844559e0063e64c9917e42ecc6f81189d0a0fc.mp4",
  ]

  const videoURLL=[
    
    "https://cdn.sanity.io/files/r9425prr/production/40ffec9592ffe4848db01e938e63349cd5dc336b.mp4",
    "https://cdn.sanity.io/files/r9425prr/production/f0ae5f85c32134bd92e4fbe94363e7b6cd8b068b.mp4",
    
  ]

  return (
    <main className=' flex flex-col'>
      {/* <VideoPlayer videoSrc={url} /> */}
      
      <MainText/>
      
      <VideoPlayer videoSrc='https://cdn.sanity.io/files/r9425prr/production/0a79498bd1d2c66ce294be710cedd02913014bd2.mp4'/>

      <BVideoCarousel videoURLs={videoURLS} tittle='Shorts/Reels' idforswipe='1'/>
      <BVideoCarousel videoURLs={videoURLT} tittle='Podcast/Trailer' idforswipe='2'/>
      <LongformBCarousel videoURLs={videoURLL} tittle='Long Form Collection'/>
      <div className=' md:flex flex-wrap justify-center bg-black  hidden bg-gradient-to-b from-black to-white'>
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

      <VideoCollection videoURL={videoURLS} title='Shorts and Reels Collection'/>
      <VideoCollection videoURL={videoURLT} title='Trailers and Podcast Collection'/>
      <LongformCarousel videoURLs={videoURLL} tittle='Long Form Collection'/>
      

      {/* <WeHaveWorkedWith/> */}

      <div className=" flex flex-col justify-center items-center bg-black pt-20 gap-2 lg:gap-0">
        
        <p className=' md:text-2xl sm:text-base text-xs pt-4 md:pt-8 animate-charcter'>packages starting from $999/Month</p>
        <button className="hover:animate-none animate-pulse   md:text-3xl hover:font-bold  hover:text-cyan text-white border-heather xl:my-6 lg:my-8 sm:w-80 sm:h-14 md:w-96 md:h-16 xs:w-60 xs:h-10 xs:text-xl sm:text-2xl   w-56 h-8 text-md   hover:border-white border-2 mx-2 rounded-xl hover:bg-black ">
          <a href='/pages/CalendlyButton' className=''>
            <h1 className=' ml-1 '> BOOK A FREE CALL</h1>
        
            
          </a>
        </button>
        <p className=' text-xs text-white mx-40'>VidualizeStudio@gmail.com</p>
        
        
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
