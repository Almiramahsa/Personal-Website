import React from 'react';

function SectionTitle({ children, id }) {
  return (
    <h1 id={id && id} className="text-3xl md:text-5xl font-extrabold font-serif mb-2 text-left  dark:text-white">
      {children}
    </h1>
  );
}

export default SectionTitle;
