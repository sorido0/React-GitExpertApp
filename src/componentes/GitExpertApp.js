import { useId, useState } from 'react';
import { Addcategoria } from './Addcategoria';
import { GifGrid } from './GifGrid';

export const GitExpertApp = () => {

    const [ categoria, setCategoria ] = useState(['Demon Slayer']);

    const agregarCtg = () => {
        // Esto es para agregar elemento al Arry 
        setCategoria( [...categoria, ' Mikesu ybuyava']);
    }

    //const id = useId()

    return(
        <>
        <h2>Git Expert App <hr/></h2>
        <Addcategoria setCategoria={ setCategoria }/>
        <ul>
            {

                categoria.map( category => 
                     //return <li key={ category }> { category }</li>
                <GifGrid 
                key={ category } 
                category={ category }
                />
                )
                // <GifGrid 
                // //key={ id } 
                // category={ categoria }
                // />
            }
        </ul>
        </>
    ) 
}

// elHdos.propTypes = {
//     value: PropTypes.h2.isRequired
// }