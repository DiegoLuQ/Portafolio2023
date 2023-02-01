import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { DatosContext } from "../../context/datosContext";
const CardAPI = () => {
  const [tecnologies, setTecnologies] = useState([]);
  const {datosPersonales, setDatosPersonales} = useContext(DatosContext)
  
  useEffect(() => {
      if(datosPersonales){
        setTecnologies(datosPersonales.tecnologies);
      }
  }, [datosPersonales]);


  return (
    <div className="bg-gray-700/50 p-5 m-3 rounded-2xl order-1 md:order-2 shadow-sm shadow-gray-400">
      <div className="text-white text-sm">
        {/* API de mis datos */}
        <div>
          <div className="font-semibold ">URL: {datosPersonales && datosPersonales.url}</div>
          <div className="mt-1">
            <span className="">Username:</span> {datosPersonales && datosPersonales.datos.username}
          </div>
          <div className="mt-1">
            <span className="">Age:</span> {datosPersonales && datosPersonales.datos.age}
          </div>
          <div className="mt-1">
            <span className="">Email:</span> {datosPersonales && datosPersonales.datos.email}
          </div>
          <div className="mt-1">
            <span className="">Location:</span> {datosPersonales && datosPersonales.location.ciudad},{" "}
            {datosPersonales && datosPersonales.location.pais}
          </div>
          <div className="mt-1">
            <span className="">Role:</span> {datosPersonales && datosPersonales.role}
          </div>
          <div className="mt-1">
            <span className="">Level:</span> {datosPersonales && datosPersonales.level}
          </div>
        </div>
        {/* Tabla de md lg */}
        <div className="mt-1 hidden sm:flex">
          <div className="">
            <span className="italic">Tecnologies:</span>
            <div className="overflow-auto text-base mt-4 ">
              <table>
                <thead className="border-b-2 border-b-[#00a675] ">
                  <tr className="">
                    <th className="w-28">Backend</th>
                    <th className="w-28">Frontend</th>
                    <th className="w-28">Databases</th>
                    <th className="w-28">Otros</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {tecnologies.map((perso, index) => (
                    <tr key={index} className="">
                      <td>{perso.backend[0]}</td>
                      <td>{perso.frontend[0]}</td>
                      <td>{perso.databases[0]}</td>
                      <td>{perso.others[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Tabla movil */}
        <div className="sm:hidden">
          <table>
            <thead className="border-b-2 border-b-[#00a675] ">
              <tr className="">
                <th className="w-24">Backend</th>
                <th className="w-24">Frontend</th>
                <th className="w-24">Databases</th>
              </tr>
            </thead>
            <tbody className="text-center divide-y">
              {tecnologies.map((perso, index) => (
                <tr key={index} className="">
                  <td>{perso.backend[0]}</td>
                  <td>{perso.frontend[0]}</td>
                  <td>{perso.databases[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* RRSS */}
        <div className="font-bold mt-3 flex justify-center">
          <div className="bg-[#00a675] p-2 rounded-2xl w-[300px]">
            <div className="flex justify-center my-1 gap-7">
              <a href={datosPersonales && datosPersonales.rrss.github} target="blank_">
                <FaGithubSquare
                  size={32}
                  className=" hover:text-gray-700/80 hover:duration-300"
                />
              </a>
              <a href={datosPersonales && datosPersonales.rrss.youtube} target="blank_">
                <FaYoutubeSquare
                  size={32}
                  className=" hover:text-gray-700/80 hover:duration-300"
                />
              </a>
              <a href={datosPersonales && datosPersonales.rrss.linkedin} target="blank_">
                <FaLinkedin
                  size={32}
                  className=" hover:text-gray-700/80 hover:duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAPI;
