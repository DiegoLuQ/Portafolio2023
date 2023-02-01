import React from "react";
import { useContext } from "react";

import Logo from "../../assets/logo.svg";
import { DatosContext } from "../../context/datosContext";
const Description = () => {

  const {datosPersonales, setDatosPersonales} = useContext(DatosContext)


  return (
    <div className="px-3 sm:w-[500px] order-2 md:order-1 md:mb-0 mb-2 ">
      <h3 className="text-3xl">{datosPersonales && datosPersonales.datos.name}</h3>
      <hr />
      <div className="text-white">
        <div className="relative ">
          {datosPersonales ? (
            datosPersonales.datos.description
          ) : (
            <div>
              ¡Hola!, soy un programador 2023
              <span className="font-bold">backend</span> autodidacta.
              <div className="">
                Me considero una persona responsable, esforzada, que comprende
                que el trabajo en equipo potencia el desarrollo y acorta el
                tiempo para alcanzar las metas. <br /> Mi objetivo es
                <span className="font-bold">trabajar en una startUp</span> en lo
                que me apasiona, que es programar.
              </div>
              <div>
                Te invito a revisar mis trabajos, videos y algunos blogs.
              </div>
              <p className="text-white text-semibold my-6">
                Desde ya muchas gracias por darte un tiempo para conocerme😁.
              </p>
            </div>
          )}
          <img
            src={Logo}
            alt=""
            className="w-8/12 md:w-9/12 absolute z-[-100] blur-lg opacity-40 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
