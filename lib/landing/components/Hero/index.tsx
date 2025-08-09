import Image from 'next/image';
import React from 'react';

export const HeroScetion = () => {
    
  return (
    <div className="relative w-full h-screen"> {/* Add your desired height */}
      <div className="hero-image-container absolute inset-0 z-[-1]">
        <Image
          src="/207464015.png"
          alt="Hero background"
          layout="fill"
          // className='blur-sm'
          objectFit="fill" 
          priority 
        />
      </div>
      
      {/* <div className="hero-content relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Una comunidad hecha para desarrolladores</h2>
      </div> */}
    </div>
  );
};