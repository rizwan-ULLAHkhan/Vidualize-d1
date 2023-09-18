'use client'
import React, { useState, useEffect } from 'react';

const ReactCarousel = ({ videoSrc }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Adjust the value to control the speed
    }
  }, []);


  useEffect(() => {
    const video = document.getElementById('videoPlayer');

    const handleVideoEnded = () => {
      video.currentTime = 0; // Reset the video to the beginning
      video.play();
    };

    if (video) {
      video.muted = true; // Mute the video if needed
      video.playsInline = true;
      video.addEventListener('ended', handleVideoEnded);
      video.play();
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (video) {
        video.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []);

  const rotateCarousel = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoURL.length);
  };

  return (
    
    <div className=" lg:hidden flex flex-row h-fit justify-center">

      <div className=' flex flex-auto justify-center mx-2 my-2'>
      <video className='rounded-lg md:h-screen' id="videoPlayer"  
      autoPlay 
      ref={videoRef}>
      
        <source src={videoSrc} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
      </div>    

 
    </div>
    
  );
};

export default ReactCarousel;

 




