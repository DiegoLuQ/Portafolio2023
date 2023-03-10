import React from 'react'
import { Link } from 'react-router-dom'
import Redes_Sociales from '../moleculas/Redes_Sociales'
import Logo from "../../assets/logo.svg"
const MainFooter = () => {
    
  return (
    <footer className="h-[10vh] sm:h-[30vh]">
        <div className="relative h-full grid md:grid-cols-3 items-center">
          <div className="text-white">
            <Redes_Sociales />
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src={Logo}
              alt=""
              className="w-28 hover:hue-rotate-15 cursor-pointer"
            />
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-center">
            <ul className="flex lg:flex-col">
              <li className="flex items-center">
                <Link to="/" className="menu-item ">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/projects" className="menu-item ">
                  Proyectos
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/videos" className="menu-item ">
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute w-full h-full bottom-[-30%] left-0 text-white border-b-4 border-teal-300 z-[-12] blur-lg "></div>
        </div>
      </footer>
  )
}

export default MainFooter