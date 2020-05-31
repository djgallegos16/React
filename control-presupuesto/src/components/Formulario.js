import React, { usetState, useState } from 'react'

const Formulario = () => {

   const [ nombre, guardarNombre ] = useState('');
   const [ cantidad, guardarCantidad ] = useState(0);

   const agregarGasto = e => {
      e.preventDefault();

      // Validar

      // Gasto

      // pasar el gasto al componente

      // resetear formulario
   }

   return (
      <form onSubmit={agregarGasto}>
         <h2>Agrega un gasto</h2>
         <div className="campo">
            <label>Nombre del Gasto</label>
            <input 
               type="text"
               className="u-full-width"
               placeholder="Ej: Transporte"
               onChange={e => guardarNombre(e.target.value)}
            />
         </div>
         <div className="campo">
            <label>Cantidad del Gasto</label>
            <input 
               type="number"
               className="u-full-width"
               placeholder="Ej: 300"
               onChange={e => guardarCantidad( parseInt(e.target.value, 10) )}
            />
         </div>
         <input 
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
         />
      </form>
   );
}
 
export default Formulario;