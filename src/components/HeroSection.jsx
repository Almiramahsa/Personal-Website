import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import MapInit from './MapInit';

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      <div className="w-full h-full absolute top-0 left-0 z-1 opacity-70">
        <MapInit />
      </div>
      <Navbar />
      <div className="text-center flex-grow">
        <h1 className="text-md md:text-xl mb-1 md:mb-3 font-normal mt-20 text-gray-900 dark:text-gray-200 dark:opacity-50">Hi everyone 👋, this is</h1>
        <div className="w-full h-full relative overflow-hidden text-black dark:text-gray-200 left-0 mt-5 ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-interTight font-bold font-serif text-7xl md:text-9xl leading-12 text-center whitespace-normal"
            style={{ letterSpacing: '-1px' }}
          >
            <span className="perspective-y-0 inline-block">
              <span>A</span>
              <span>l</span>
              <span>m</span>
              <span>i</span>
              <span>r</span>
              <span>a</span>
            </span>
          </motion.div>
        </div>
        <div className="w-full h-full relative overflow-hidden text-black dark:text-gray-200 left-0 mt-5 ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-interTight font-bold font-serif text-7xl md:text-9xl mb-5 leading-12 text-center whitespace-normal dark:text-gray-200"
            style={{ letterSpacing: '-1px' }}
          >
            <span className="perspective-y-0 inline-block">
              <span>M</span>
              <span>a</span>
              <span>h</span>
              <span>s</span>
              <span>a</span>
            </span>
          </motion.div>
        </div>
        <div className="w-full h-full relative overflow-hidden text-black dark:text-gray-200 left-0  ">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="flex items-center justify-center flex-col ">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="text-center text-md md:text-xl text-black dark:text-gray-200 ">
              <p>A Frontend Engineer based in Indonesia.</p>
              <p>Feel free to explore my work below.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
