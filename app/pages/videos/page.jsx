// pages/videos.js
import React from 'react';
import VideoCarousel from '@/components/VideoCarousel'
import VideoPlayer from '@/components/Homevideo';
import BVideoCarousel from '@/components/ButtonCarousel'




function VideosPage() {

  const videoURL = [
    '/video/video1.mp4' ,
    '/video/video2.mp4' ,
   '/video/video3.mp4' ,
   '/video/video3.mp4' ,
   '/video/video3.mp4' ,
  // Add more video URLs as needed
];


  return (
    <div className='flex flex-col '>
        <VideoPlayer />
        <div className='flex justify-center mt-28 '>
        <p className=' border-2 border-heather text-heather md:text-2xl text-xl font-bold bg-cyan p-2 rounded-xl'>Shorts/Reels Collection</p>
        </div>
        
        <BVideoCarousel videoURLs={videoURL}/>

        <VideoCarousel videoSrc={videoURL}/>

        <div className='flex justify-center mt-28 '>
        <p className=' border-2 border-heather text-heather md:text-2xl text-xl font-bold bg-cyan p-2 rounded-xl'>Podcast/Trailers Collection</p>
        </div>
        
        <BVideoCarousel videoURLs={videoURL}/>

        <VideoCarousel videoSrc={videoURL}/>


        <div className='flex justify-center mt-28 '>
        <p className='border-2 border-heather text-heather md:text-2xl text-xl font-bold bg-cyan p-2 rounded-xl'>Long Form Collection</p>
        </div>
        
        <BVideoCarousel videoURLs={videoURL}/>

        <VideoCarousel videoSrc={videoURL}/>


    </div>
  );
}

export default VideosPage;
