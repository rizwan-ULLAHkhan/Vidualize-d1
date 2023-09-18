import React from 'react';

const clients = [
  { name: 'Google', logoSrc: '/workedwithlogos/google.png' },
  { name: 'Careem', logoSrc: '/workedwithlogos/careem.svg' },
  { name: 'Facebook', logoSrc: '/workedwithlogos/islam.jpeg' },
  { name: 'Instagram', logoSrc: '/workedwithlogos/launcggood.jpg' },
  { name: 'Instagram', logoSrc: '/workedwithlogos/openai.jpeg' },
  { name: 'Instagram', logoSrc: '/workedwithlogos/saqibqureshi.png' },
  { name: 'Instagram', logoSrc: '/workedwithlogos/whenshifthappens.png' },
  // Add more clients here
];

;

const WeHaveWorkedWith = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-12">
          We Have Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={client.logoSrc}
                alt={client.name}
                className="h-12 md:h-16 rounded-full"
              />
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default WeHaveWorkedWith;
