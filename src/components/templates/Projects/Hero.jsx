import React from "react";
import Logo from "../../../assets/logo.svg";
const Hero = ({ titulo, subtitulo }) => {
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 text-center sm:items-center ">
      <div className="relative">
        <div>
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0059ff] pb-3 hover:bg-gradient-to-r hover:text-6xl hover:duration-200 hover:ease-in ease-out duration-300">
            {titulo}
          </h1>
          <h4 className="text-base italic text-white mt-3">{subtitulo}</h4>
        </div>
        <img
          src={Logo}
          alt=""
          className="absolute hidden md:block w-12/12 md:w-12/12 z-[-100] blur-lg opacity-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-10%] sm:translate-y-[-50%]"
        />
      </div>
      <div className="mt-3 mx-2 rounded-md border border-teal-400 py-4 grid grid-cols-3 gap-1 gap-y-4 justify-center">
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="">
            <img
              src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
              alt=""
              width="80px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
