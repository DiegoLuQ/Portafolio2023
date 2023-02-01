import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DatosContext } from "../../context/datosContext";
import SinProyectos from "../atomos/SinProyectos";
import Video from "../moleculas/Video";

const Videos = ({ cantidad, mostrar = false }) => {
  const { datosPersonales, setDatosPersonales } = useContext(DatosContext);
  const [videosYoutube, setVideosYoutube] = useState([]);
  useEffect(() => {
    if (datosPersonales) {
      setVideosYoutube(datosPersonales.canal_yt);
    }
  }, [datosPersonales]);

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setVideosYoutube(
      datosPersonales.canal_yt.filter((p) =>
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
      <div className="p-2">
        {videosYoutube.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
            {videosYoutube
              .map((item, i) => (
                <Video
                  key={i}
                  detalle={item.description}
                  url_img="https://i.ytimg.com/vi/4e2VW3Nu-64/maxresdefault.jpg"
                  titulo={item.titulo}
                  url_video={item.url}
                  categories={item.categories}
                />
              ))
              .reverse()
              .slice(0, cantidad)}
          </div>
        ) : (<SinProyectos mensaje="Aun no hay Proyectos" />)
        }
      </div>
    </>
  );
};

export default Videos;
