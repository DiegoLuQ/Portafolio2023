import React from "react";

import Hero from "../templates/Projects/Hero";
import Section from "../templates/Projects/Section";

const Projects = () => {


  return (
    <main>
      {/* Hero */}
      <Hero
        titulo="Últimos Proyectos"
        subtitulo="Dedicación y Tiempo"
      />
      <hr className="mt-3 border border-teal-400" />

      {/* section */}
      <Section/>
    </main>
  );
};

export default Projects;
