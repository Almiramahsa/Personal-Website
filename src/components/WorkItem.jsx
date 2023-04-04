import React from 'react';

function WorkItem({ title, tech, imgUrl, description }) {
  return (
    <div className="  dark:bg-slate-800 border rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mb-3 transition hover:-translate-y-2 transform ">
      <div>
        <img src={imgUrl} alt={title} className="w-full h-50 md:h-50 object-cover rounded-lg" />
      </div>

      <div className="px-4 md:px-10 mt-10 text-gray-600">
        <h3 className="text-2xl text-left  md:text-xl mb-5 md:mb-3 font-semibold text-black dark:text-white">{title}</h3>
      </div>
      <div className="px-4 md:px-10">
        {tech.map((techItem, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-base text-gray-700 mr-2 mb-2">
            {techItem}
          </span>
        ))}
      </div>
      <div className="px-4 md:px-10 ">
        <h3 className="text-sm md:text-md mb-2 md:mb-3 font-semibold text-black dark:text-white mt-3"> Description : </h3>
        <p className="dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default WorkItem;
