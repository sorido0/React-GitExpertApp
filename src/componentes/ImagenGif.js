import React from 'react'


// Siempre para recibir datos desestruturados hay que usar llaves. {}
export const ImagenGif = ( { titulo, url}  ) => {
  return (
    <div className='cart'>
        <img src={ url} title={titulo}></img>
        <p> {titulo } </p>
    </div>
  )
}
