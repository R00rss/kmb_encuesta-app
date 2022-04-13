import React from 'react'
import { useLocation } from 'react-router-dom'

const Respuesta = () => {
    const location = useLocation()
    const { sendData } = location.state
  return (
      <>
        <div>funciona!</div> 
        <h1>{sendData.nombre}</h1>       
      </>
    
  )
}

export default Respuesta