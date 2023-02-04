import axios from "axios";
import { useState } from "react";
import { useEffect, createContext, React } from "react";

export const DatosContext = createContext();

export const DatosProvider = ({ children }) => {
  const [datosPersonales, setDatosPersonales] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/v1/datos`)
      .then((resp) => {
        setDatosPersonales(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <DatosContext.Provider
      value={{ datosPersonales, setDatosPersonales, loading }}
    >
      {children}
    </DatosContext.Provider>
  );
};
