import React from 'react';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';
import works from '../data/works';

function Works() {
  return (
    <div className="my-12">
      <SectionTitle id="works">Side Projects</SectionTitle>
      <p className="w-3/4 text-gray-600 dark:text-gray-200">
        I have completed numerous projects, but there are a few that hold a special place in my heart. I invite you to take a look at these projects and feel free to contribute your ideas on how they can be further improved. Let's work
        together to create something amazing!
      </p>
      <div className="grid grid-vols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10">
        {works.map((work) => (
          <WorkItem key={work.title} title={work.title} year={work.year} link={work.link} icon={work.img} imgUrl={work.imgUrl} tech={work.tech} description={work.description} />
        ))}
      </div>
    </div>
  );
}

export default Works;
