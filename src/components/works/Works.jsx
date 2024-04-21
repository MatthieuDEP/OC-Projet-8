import React from "react";
import './works.scss';
import Card from "../card/Card";
import worksData from '../../data/worksData.json';

export default function Works() {
  return (
    <section className="works" id="works">
      <h2 className="works__title">Mes travaux</h2>
      <div className='works__gallery'>
        {worksData.map(work => (
          <Card key={work.id} id={work.id} cover={work.cover} title={work.coverTitle} />
        ))}
      </div>
    </section>
  );
};