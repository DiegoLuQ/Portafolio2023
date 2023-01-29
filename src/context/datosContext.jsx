import axios from "axios";
import { useState } from "react";
import { useEffect, createContext, React } from "react";

export const DatosContext = createContext();

export const DatosProvider = ({ children }) => {
  const [datosPersonales, setDatosPersonales] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/datos`)
    .then((resp) => {
        setDatosPersonales(resp.data);
    });
  }, []);

  return (
    <DatosContext.Provider value={{ datosPersonales, setDatosPersonales }}>
      {children}
    </DatosContext.Provider>
  );
};

