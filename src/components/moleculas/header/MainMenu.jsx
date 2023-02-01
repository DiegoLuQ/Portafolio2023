import React from 'react'
import { Link } from 'react-router-dom'
const MainMenu = () => {
  return (
    <nav className='w-full flex justify-center sm:justify-end'>
        <ul className='flex justify-end'>
            <li className='flex items-center'>
                <Link to='/' className='menu-item'>
                    Home
                </Link>
            </li>
            <li className='flex items-center'>
                <Link to='/projects' className='menu-item'>
                    Proyectos
                </Link>
            </li>
            <li className='flex items-center'>
                <Link to='/videos' className='menu-item '>
                    Videos
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainMenu