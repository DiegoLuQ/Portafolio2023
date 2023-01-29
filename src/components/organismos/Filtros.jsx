import React from "react";
import Filtro from "../moleculas/proyectos/Filtro";

const Filtros = () => {

  return (
    <div className="flex-wrap sm:grid">
      <h3 className="ml-3 hidden md:flex text-white text-[1.2rem] sm:text-start">Tecnologias</h3>
      {/* sidebar de filtros */}
      <div className="flex justify-center flex-wrap sm:flex-col items-center sm:items-start">
        <Filtro titulo="Python" />
        <Filtro titulo="Docker" />
        <Filtro titulo="Mongodb" />
        <Filtro titulo="FastAPI" />
        <Filtro titulo="React" />
      </div>
    </div>
  );
};

export default Filtros;
