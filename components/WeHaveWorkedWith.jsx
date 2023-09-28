import React from 'react';

const clients = [
  { name: 'Careem', logoSrc: '/workedwithlogos/careem.svg' },
  { name: 'Islam', logoSrc: '/workedwithlogos/islam.jpeg' },
  { name: 'launchgood', logoSrc: '/workedwithlogos/launchgood.jpg' },
  { name: 'openai', logoSrc: '/workedwithlogos/openai.jpeg' },
  { name: 'saqibqureshi', logoSrc: '/workedwithlogos/saqibqureshi.png' },
  { name: 'numad', logoSrc: '/workedwithlogos/numad.jpeg' },
  { name: 'whenshifthappens', logoSrc: '/workedwithlogos/whenshifthappens.png' },
  // Add more clients here
];

const WeHaveWorkedWith = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center my-special-div">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-12">
          We Have Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={clients[0].logoSrc}
              alt={clients[0].name}
              className="h-12 sm:h-20 md:h-24 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={clients[1].logoSrc}
              alt={clients[1].name}
              className="h-10 sm:h-16 md:h-20 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={clients[2].logoSrc}
              alt={clients[2].name}
              className="h-14 sm:h-20 md:h-28 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={clients[3].logoSrc}
              alt={clients[3].name}
              className="h-10 sm:h-16 md:h-20 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={clients[4].logoSrc}
              alt={clients[4].name}
              className="h-14 sm:h-20 md:h-28 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={clients[5].logoSrc}
              alt={clients[5].name}
              className="h-16 sm:h-24 md:h-28 rounded-full"
            />
          </div>
        

          
          <div className=" justify-center items-center hidden md:flex">
            <img
              src={clients[6].logoSrc}
              alt={clients[5].name}
              className="h-12 sm:h-16 md:h-20 rounded-full"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WeHaveWorkedWith;
