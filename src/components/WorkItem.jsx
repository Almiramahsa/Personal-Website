import React from 'react';
import { AiFillGithub } from 'react-icons/Ai';
import { BiLink } from 'react-icons/Bi';
function WorkItem({ title, tech, imgUrl, description }) {
  return (
    <div className=" bg-gray-100 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mb-3 transition hover:-translate-y-2 transform ">
      <div>
        <img src={imgUrl} alt={title} className="w-full h-50 md:h-50 object-cover rounded-lg" />
      </div>

      <div className="mt-5 px-10">
        <BiLink className="text-gray-500 hover:text-violet-500 dark:text-gray-200 w-6 h-6 mb-3 mr-3 inline-block" />
        <AiFillGithub className="text-gray-500 hover:text-violet-500 dark:text-gray-200 w-6 h-6 mb-3 inline-block" />
      </div>

      <div className="px-10 text-gray-600">
        <h3 className="text-2xl text-left  md:text-xl mb-5 md:mb-3 font-semibold text-black dark:text-white">{title}</h3>
      </div>
      <div className="px-10">
        {tech.map((techItem, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-base text-gray-700 mr-2 mb-2">
            {techItem}
          </span>
        ))}
      </div>
      <div className="px-10 ">
        <h3 className="text-sm md:text-md mb-2 md:mb-3 font-semibold text-black dark:text-white mt-3"> Description : </h3>
        <p className="dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default WorkItem;
