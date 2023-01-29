import React from 'react'
import Loguito from '../moleculas/header/Loguito'

const MainHeader = ({children}) => {
  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <Loguito/>
        {children}
      </div>
    </div>
  )
}

export default MainHeader