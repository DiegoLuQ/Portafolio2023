import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
const Loguito = () => {
  return (
    <div className='hidden sm:flex'>
        <Link to='/'>
        <img src={Logo} alt="Logo Diego Luque" width="45" />
        
        </Link>
    </div>
  )
}

export default Loguito