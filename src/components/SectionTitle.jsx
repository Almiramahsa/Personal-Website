import React from 'react';
function SectionTitle({ children, id }) {
  return (
    <div className="flex justify-center flex-col ">
      <h1 id={id && id} className="text-3xl md:text-5xl font-extrabold font-serif mb-2 text-left mt-10  dark:text-white">
        {children}
      </h1>
    </div>
  );
}

export default SectionTitle;
