import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='card'>
      <h2>Nombre: {props.nombre}</h2>
      <h2>Apellido:{props.apellido}</h2>
    </div>
    
    </>
  )
}

export default Card