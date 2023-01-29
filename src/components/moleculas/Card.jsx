import React from "react";
import { Link } from "react-router-dom";

const Card = ({ titulo, herramientas, descripcion, url_img, subdomain }) => {
  return (
    <div className="p-4 bg-gray-700/50">
      <h2 className="text-blue-600 flex">
        <a href="" className="hover:text-[#00a675]">
          {titulo}
        </a>
      </h2>
      <div className="flex-cols justify-between md:flex">
        <div>
          <Link className="text-xs italic text-white hover:text-[#00a675]">
            {herramientas[0]}{" "}
          </Link>
          <Link className="text-xs italic text-white hover:text-[#00a675]">
            {herramientas[1]}{" "}
          </Link>
          <Link className="text-xs italic text-white hover:text-[#00a675]">
            {herramientas[2]}
          </Link>
        </div>
        <div>
          <a
            href=""
            className="text-sm italic text-gray-600 hover:text-gray-700"
          >
            {subdomain}
          </a>
        </div>
      </div>
      <a href="">
        <img
          src={url_img}
          className="w-full my-2 rounded-lg object-cover"
          alt={herramientas}
        />
      </a>
      <p className="my-4 border rounded-md p-2 text-white">{descripcion}</p>
      <div className="text-center flex items-center">
        <a href="bodega.diego-luque.com" className="btn-cards ">
          Link
        </a>
      </div>
    </div>
  );
};

export default Card;
