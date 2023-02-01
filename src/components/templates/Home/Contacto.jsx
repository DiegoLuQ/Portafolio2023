import React from "react";
import Curriculun from "../../organismos/Curriculun";
import Formulario from "../../organismos/Formulario";
const Contacto = () => {
  return (
    <div className="my-10 bg-gray-700/50 p-3 sm:rounded-md">
      <div className="grid md:grid-cols-2 mt-2 gap-2">
        <Curriculun />
        <Formulario />
      </div>
    </div>
  );
};

export default Contacto;
