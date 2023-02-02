import { useState, useContext, useEffect } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { DatosContext } from "../../context/datosContext";

const Redes_Sociales = () => {
  const [tecnologies, setTecnologies] = useState([]);
  const { datosPersonales, setDatosPersonales } = useContext(DatosContext);

  useEffect(() => {
    if (datosPersonales) {
      setTecnologies(datosPersonales.tecnologies);
    }
  }, [datosPersonales]);
  return (
    <div className="font-bold mt-3 flex justify-center">
      <div className="bg-[#00a675] p-2 rounded-2xl w-[300px]">
        <div className="flex justify-center my-1 gap-7">
          <a
            href={datosPersonales && datosPersonales.rrss.github}
            target="blank_"
          >
            <FaGithubSquare
              size={32}
              className=" hover:text-gray-700/80 hover:duration-300"
            />
          </a>
          <a
            href={datosPersonales && datosPersonales.rrss.youtube}
            target="blank_"
          >
            <FaYoutubeSquare
              size={32}
              className=" hover:text-gray-700/80 hover:duration-300"
            />
          </a>
          <a
            href={datosPersonales && datosPersonales.rrss.linkedin}
            target="blank_"
          >
            <FaLinkedin
              size={32}
              className=" hover:text-gray-700/80 hover:duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redes_Sociales;
