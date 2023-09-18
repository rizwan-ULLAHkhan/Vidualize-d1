import React from 'react';
import '../styles/about-us.css'; // Import your CSS file to apply styles
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="about-us py-16 bg-gradient-to-b from-cyan to-teal text-white lg:block hidden">
      <div className="container mx-auto text-center">
        <div className='my-special-div'>
        <h1 className="text-5xl font-extrabold tracking-tight mb-12">
          Meet Our Team
        </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-40 h-40 border-4 border-cyan hover:border-teal">
              <Image src="/fur.png" alt="Furqan Khan" width={160} height={160} />
            </div>
            <h2 className="text-2xl font-semibold mt-6">Furqan Khan</h2>
            <p className="text-gray-700 mt-2">
            Furqan is a professional content creator and editor with 7+ Years of experience delivering high quality content and helping grow the social media following of top brands and creators.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-40 h-40 border-4 border-cyan hover:border-teal">
              <Image src="/saif1.png" alt="Saif" width={160} height={160} />
            </div>
            <h2 className="text-2xl font-semibold mt-6">Saif</h2>
            <p className="text-gray-700 mt-2">
            Saif is a Entrepreneur and Brand Advisor who helps business executives brand themselves better and change the world. He is the Co-Founder and Director at M.I.N and Creed & Culture.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-40 h-40 border-4 border-cyan hover:border-teal">
              <Image
                src="/abdullah1.png"
                alt="Abdullah Khan"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-2xl font-semibold mt-6">Abdullah Khan</h2>
            <p className="text-gray-700 mt-2">
            Abdullah is a professional video editor with 9+ years of experience editing engaging social media content for high level clients such as Zaid El-Omar, Launch Good and Rhyad Muslim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
