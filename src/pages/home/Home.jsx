import React from "react";
import './home.scss';
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Works from "../../components/works/Works";

export default function Home() {
  return (
    <main className="home">
      <h1>Matthieu DEPRET</h1>
      <About />
      <Skills />
      <Works />
    </main>
  );
};