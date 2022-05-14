import React from 'react'
import { ImagenGif } from './ImagenGif';
import { useFestchGifs } from './../hooks/useFestchGifs';


// Esto recibia un category -- cambio a categoria
export const GifGrid = ({ category }) => {

    const {data:imegenen  , loading} = useFestchGifs( category );

    // Aqui atraparemos los datos del arreglo. usando { useState }
    // const [imegenen, setimegenen] = useState([]);

    // useEffect( () => {
    //     getGif( category )
    //         .then( setimegenen );
    //         // Esto es solo por su la categori cambia.
    // }, [ category ]);

  return (
      <>
      <h3> { category } </h3>

         { loading &&  <p className='animate__animated animate__flash' >Loading...</p>} 
       <div className='cart-grid animate__animated animate__bounceInDown'>
                {
                    // Con el uso de los estados podemos dar uso las datos. ( Para una mejor lectura del codigo usaremos { para destruturar}
                    imegenen.map( img => (
                        <ImagenGif
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
        </div> 
      </>

    )

}