import React from 'react';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';
import works from '../data/works';

function Works() {
  return (
    <div className="my-12">
      <SectionTitle id="works">Side Projects</SectionTitle>
      <div className="grid grid-vols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20">
        {works.map((work) => (
          <WorkItem key={work.title} title={work.title} icon={work.icon} imgUrl={work.imgUrl} tech={work.tech} description={work.description} />
        ))}
      </div>
    </div>
  );
}

export default Works;
