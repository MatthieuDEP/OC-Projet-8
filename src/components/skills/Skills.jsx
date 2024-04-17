import React from "react";
import './skills.scss'
import Skill from "../skill/Skill";
import skillsData from "../../data/skillsData.json";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Compétences</h2>
      <div className="skills__gallery">
        {skillsData.map(skill => (
          <Skill key={skill.id} logo={skill.logo} title={skill.title} />
        ))}
      </div>
    </section>
  );
};