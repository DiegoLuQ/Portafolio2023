import React from "react";
import Cards from "../../organismos/Cards";
import Filtros from "../../organismos/Filtros";
import Videos from "../../organismos/Videos";

const Section = ({ children }) => {
  const cantidad = 10;
  // setProjects(projects.filter(item => item.categories.includes("go")))

  return (
    <div className="mt-3 sm:gap-2 grid grid-cols-3 sm:grid-cols-8 mx-2">
      {/* FILTRACION DE PROYECTOS */}
      <div className="bg-gradient-to-r to-[#000b1f] from-[#16d4ff29] col-span-3 sm:col-span-1 p-1 sm:rounded-lg">
        <Filtros />
      </div>
      {/* PROYECTOS */}
      <div className="bg-gradient-to-r from-[#000b1f] to-[#16d4ff29] px-2 col-span-6 sm:col-span-7 sm:rounded-lg">
        {children ? (
          <Videos mostrar={true} cantidad={cantidad} />
        ) : (
          <Cards mostrar={true} cantidad={cantidad} />
        )}
      </div>
    </div>
  );
};

export default Section;
