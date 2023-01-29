import React from "react";
import Cards from "../../organismos/Cards";

const Projects = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <h2 className="font-extrabold text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-teal-400 to-[#00ad0e] py-3">
          Últimos Proyectos
        </h2>
      </div>
      <Cards cantidad={3} />
    </div>
  );
};

export default Projects;
