import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ServiceItem({ title, icon, description }) {
  const [showMore, setShowMore] = useState(false);

  const shortDescription = description.split(' ').slice(0, 40).join(' ');
  const fullDescription = description.split(' ').slice(0, 40).join(' ');

  return (
    <div className="w-full flex items-center justify-center py-5 md:py-20 ">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className=" border shadow-md  dark:hover:bg-gray-900 hover:-translate-y-2 p-5 transition transform rounded-md ">
        <div className="text-gray-800 dark:text-gray-200 w-6 h-6 mb-3">{icon}</div>
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{title}</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-5">
          {showMore ? description : shortDescription + '...'}
          <button onClick={() => setShowMore(!showMore)} className="ml-2 text-indigo-600 ">
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

export default ServiceItem;
