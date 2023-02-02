import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  titulo,
  herramientas,
  descripcion,
  url_img,
  subdomain,
  repository,
  url,
  level,
  type_bf
}) => {
  return (
    <div className="p-4 bg-gray-700/50 sm:rounded-md">
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
            href={url}
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
      <div className="border rounded-md p-2 text-white my-2">
        <p className="my-2">{descripcion}</p>
        <div className="">
          <div className="flex">
            <label className="font-bold">Level:</label>
            <label className="ml-2">{level}</label>
          </div>
          <div className="flex">
            <label className="font-bold">Type:</label>
            <label className="ml-2">{type_bf}</label>
          </div>
        </div>
      </div>
      <div className="text-center flex items-center gap-2">
        <a href="bodega.diego-luque.com" className="btn-cards ">
          Preview
        </a>
        <a href={repository} target="_blank" className="btn-cards bg-gray-400">
          Github
        </a>
      </div>
    </div>
  );
};

export default Card;
