import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function TypingText({ text = '', onTypingEnd }) {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    console.log('Text:', text);
    const textArray = text.split('');
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTypedText((prevText) => prevText + textArray[currentIndex]);
      currentIndex++;

      if (currentIndex >= textArray.length) {
        clearInterval(intervalId);
        onTypingEnd();
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text, onTypingEnd]);
  if (!text) return null;

  return (
    <h1 className="w-full h-full relative overflow-visible font-inter font-normal text-md md:text-xl tracking-tight text-left whitespace-normal text-gray-400 mb-0 mt-5">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="block text-2xl">
        {typedText}
      </motion.span>
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="block h-full w-1 bg-gray-400 absolute top-0 right-0"
          style={{ animationDelay: '1s' }}
        />
      )}
      {/* Add this line */}
      {console.log('Text prop value:', text)}
    </h1>
  );
}

function HeroSection() {
  const handleTypingEnd = () => {
    console.log('Typing has finished');
  };
  const text = 'A Frontend Engineer based in Indonesia. Feel free to explore my work below.  ';
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-md md:text-xl mb-1 md:mb-3 font-normal dark:text-indigo-400">Hi everyone, this is</h1>
        <div className="w-full h-full relative overflow-hidden text-black dark:text-gray-200 left-0 mt-5">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-interTight font-bold text-7xl leading-12 text-center whitespace-normal" style={{ letterSpacing: '-1px' }}>
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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-interTight font-bold text-7xl mb-5 leading-12 text-center whitespace-normal dark:text-gray-200"
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

        <div className="flex items-center justify-center flex-col ">
          <div className="text-center text-4xl">
            {text && <TypingText text={text} onTypingEnd={handleTypingEnd} />}
            <a href="https://almiramahsa.netlify.app" className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 mt-4 md:text-md">
              See Works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
