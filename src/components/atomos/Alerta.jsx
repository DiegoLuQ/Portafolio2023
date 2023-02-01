import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.msg ? 'text-green-300 text-lg font-semibold': 'text-red-300'}`}>{alerta.msg} 🤓</div>
  )
}

export default Alerta