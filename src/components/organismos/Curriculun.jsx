import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DatosContext } from "../../context/datosContext";

const Curriculun = ({}) => {
  const {datosPersonales, setDatosPersonales} = useContext(DatosContext)
  const [curriculun, setCurriculun] = useState({})
  useEffect(() => {
    if(datosPersonales) {
      setCurriculun(datosPersonales.datos)
    }
  }, [datosPersonales])
  return (
    <div className="flex flex-col object-cover">
      <h3 className="text-[#00a675]">Aquí mi CV</h3>
      <div className="w-full ">
        <a
          className="md:w-12/12 w-12/12 m-auto relative"
          href={curriculun.cv}
          target="blank_"
        >
          <img
            src="https://codersera.com/blog/wp-content/uploads/2021/10/python-developer.jpeg"
            alt="python developer api"
            className="mb-6"
          />
          <div className="blur-lg hover:blur-none absolute top-0 w-full h-full hover:bg-black/70 duration-300 ease-in">
            <p
              className="hidden sm:flex font-bold text-teal-500 hover:bg-gray-300 px-4 py-2 rounded-md hover:rounded-md hover:px-4 hover:py-2 text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-300 ease-in"
            >
              Descargar
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Curriculun;
