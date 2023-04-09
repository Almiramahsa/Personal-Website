import React from 'react';
import Navbar from './Navbar';
function WorkItem({ title, tech, year, img, link, description }) {
  return (
    <div className="dark:bg-slate-800 border rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mb-3 transition hover:bg-gray-50 hover:bg-opacity-75">
      <div className="flex justify-end">
        <p className="text-gray-400 inline-block hover:text-violet-500">{year}</p>
        <a href={link}>
          <img src="/github-mono.svg " className="inline-block ml-10 hover:text-violet-500"></img>
        </a>
      </div>

      <div className="px-4 md:px-10 mt-5 ">
        <h3 className="text-2xl text-left  md:text-xl mb-5 md:mb-3 font-semibold font-serif text-black dark:text-white">{title}</h3>
      </div>
      <div className="px-4 md:px-10">
        {tech.map((techItem, index) => (
          <span key={index} className="inline-block  text-sm mr-3 text-violet-400  mb-2">
            • {techItem}
          </span>
        ))}
      </div>

      <div className="px-4 md:px-10 ">
        <p className="text-gray-500 dark:text-gray-200  text-sm">
          {title} {description}
        </p>
      </div>
    </div>
  );
}

export default WorkItem;
