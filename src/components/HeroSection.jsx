import React from 'react';

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 font-bold dark:text-indigo-800">Hi everyone, this is Almira</h1>
        <p className="text-md md:text-xl max-w-md dark:text-gray-300">trying to make my personal website trying to make my personal website trying to make my personal website</p>
        <a href="" className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 mt-4 md:text-md">
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
