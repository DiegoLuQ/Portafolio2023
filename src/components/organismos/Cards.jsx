import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DatosContext } from "../../context/datosContext";
import SinProyectos from "../atomos/SinProyectos";
import Card from "../moleculas/Card";

const Cards = ({ cantidad, mostrar = false }) => {
  const { datosPersonales, setDatosPersonales } = useContext(DatosContext);
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   if(data) {
  //     setProjects(data.projects)
  //   }
  // },[data])
  // console.log(projects)
  useEffect(() => {
    if (datosPersonales) {
      setProjects(datosPersonales.projects);
    }
  }, [datosPersonales]);

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setProjects(
      datosPersonales.projects.filter((p) =>
        JSON.stringify(p.categories).includes(filterValue)
      )
    );
  };
  return (
    <>
      {mostrar ? (
        <div className="flex my-3">
          <input
            onChange={handleFilter}
            type="text"
            className="w-full sm:w-[50%] rounded-lg p-2 text-xl"
            placeholder="Buscar"
          />
        </div>
      ) : (
        <div></div>
      )}

      <div className="py-2">
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {projects
              .map((item, i) => (
                <Card
                  key={i}
                  subdomain={item.subdomain}
                  titulo={item.titulo}
                  herramientas={item.categories}
                  descripcion={item.description}
                  url_img={item.img}
                  repository={item.repository}
                  url={item.url}
                  level={item.level}
                  type_bf={item.type_back_front}
                />
              ))
              .reverse()
              .slice(0, cantidad)}
          </div>
        ) : (
          <SinProyectos mensaje="Aun no hay Proyectos" />
        )}
      </div>
    </>
  );
};

export default Cards;
