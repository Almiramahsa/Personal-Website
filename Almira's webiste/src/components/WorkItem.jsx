import React from 'react';

function WorkItem({ title, tech, description }) {
  return (
    <div className=" bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mb-3 transition hover:-translate-y-2 transform ">
      {/* <div>
        <img src={imgUrl} alt={title} className="w-full h-46 md:h-36 object-contain" />
      </div> */}

      <div className="px-10 text-gray-600">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
      </div>
      <div className="px-10">
        <h3 className="text-sm md:text-md mb-2 md:mb-3 font-semibold text-black dark:text-white">Technology : </h3>
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
