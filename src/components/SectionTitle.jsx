import React from 'react';

function SectionTitle({ children, id }) {
  return (
    <h1 id={id && id} className="text-5xl font-semibold mb-0 text-center text-black dark:text-indigo-500">
      {children}
    </h1>
  );
}

export default SectionTitle;
