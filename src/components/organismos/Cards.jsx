import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DatosContext } from "../../context/datosContext";
import useFetch from "../../hooks/useFetch";
import Card from "../moleculas/Card";

const Cards = ({ cantidad, mostrar = false }) => {
  const { datosPersonales, setDatosPersonales } = useContext(DatosContext);
  const { data } = useFetch("datos");
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

      <div className="overflow-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {projects
          .map((item, i) => (
            <Card
              key={i}
              subdomain={item.subdomain}
              titulo={item.titulo}
              herramientas={item.categories}
              descripcion="Descripcion Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta harum quasi tempore alias architecto, sit excepturi nisi quo autem eum, quaerat repellat quia culpa animi. Temporibus, aut? Dicta, quia qui!"
              url_img="https://i.ytimg.com/vi/4e2VW3Nu-64/maxresdefault.jpg"
            />
          ))
          .reverse()
          .slice(0, cantidad)}
      </div>
    </>
  );
};

export default Cards;
