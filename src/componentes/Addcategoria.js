import React from 'react'
import { useState } from 'react';
import { PropTypes } from 'prop-types';

                                // Esta en la forma de recibir una funcion de otro componente 
export const Addcategoria = ( { setCategoria } ) => {
   
    const [inputValue, setinputValue] = useState([]);

    const cargarInput = ( e ) => {
        setinputValue( e.target.value )        
    }

    const envioFormulario = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategoria( cat => [ inputValue,...cat]);
            setinputValue('');
        }
        
    }

  return (
    <form onSubmit={ envioFormulario }> 
        <input type="text" value={ inputValue } onChange={cargarInput} placeholder='Buscar..'/>
    </form>
                
  )
}


Addcategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}