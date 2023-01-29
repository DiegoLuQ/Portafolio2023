import React from "react";

const Formulario = () => {
  return (
    <div>
      <h3 className="text-center mb-2 text-[#00a675]">Contacto</h3>
      <div className="flex flex-col gap-3">
        <input
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          type="text"
          placeholder="Asunto"
        />
        <textarea
          name=""
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          id=""
          cols="30"
          placeholder="Mensaje"
        ></textarea>
        <button className="btn-form ">Enviar</button>
      </div>
    </div>
  );
};

export default Formulario;
