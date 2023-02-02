import axios from "axios";
import React from "react";
import { useState } from "react";
import Alerta from "../atomos/Alerta";

const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      nombre: e.target.nombre.value,
      mensaje: correo,
    };

    if ([data.email, data.nombre, data.mensaje].includes("")) {
      setAlerta({
        msg: "Faltan datos",
        error: true,
      });
      return;
    }
    axios
      .post(`${import.meta.env.VITE_API}/email`, data)
      .then((resp) => {
        setAlerta({
          msg: resp.data.detail,
          error: true,
        });
        e.target.email.value = "";
        e.target.nombre.value = "";
        setCorreo("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { msg } = alerta;

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center mb-2 text-[#00a675]">Contacto</h3>
      <div className="flex flex-col gap-3">
        <input
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          type="text"
          placeholder="Nombre"
          name="nombre"
        />
        <input
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name=""
          className="p-3 border rounded-lg focus:outline-[#00a675] focus:ring-[#00a675] focus:ring-1"
          id=""
          cols="30"
          rows="6"
          placeholder="Mensaje"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        ></textarea>
        <div className="flex flex-col items-center sm:flex-row sm:flex sm:justify-between sm:items-center">
          <button className="btn-form ">Enviar</button>
          <div className="mt-2 sm:mt-0">
            {msg && <Alerta alerta={alerta} />}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
