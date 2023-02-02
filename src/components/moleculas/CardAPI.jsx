import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";


import { DatosContext } from "../../context/datosContext";
import Redes_Sociales from "./Redes_Sociales";
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
          <div className="mt-1 primary font-semibold">
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
        <Redes_Sociales />
      </div>
    </div>
  );
};

export default CardAPI;
