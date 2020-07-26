import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

   const [ nombre, guardarNombre ] = useState('');
   const [ cantidad, guardarCantidad ] = useState(0);
   const [ error, guardarError ] = useState(false);

   const agregarGasto = e => {
      e.preventDefault();

      // Validar
      if (cantidad<1 || isNaN(cantidad) || nombre.trim() === ''){
         guardarError(true)
         return;
      }
      guardarError(false)
      // Gasto
      // cuando se tiene clave y valor con el mismo nombre, se puede pasar solo uno
      // npm i shortid para crear un nuevo paquete
      const gasto = {
         nombre,
         cantidad,
         id: shortid.generate()
      }

      console.log(gasto);
      // pasar el gasto al componente
      guardarGasto(gasto);
      guardarCrearGasto(true);

      // resetear formulario
      guardarNombre('');
      guardarCantidad(0);
   }

   return (
      <form onSubmit={agregarGasto}>
         <h2>Agrega un gasto</h2>
         {error ? <Error mensaje="Ambos campos son obligatorios, y el presupuesto debe ser mayor a 1" /> :null}
         <div className="campo">
            <label>Nombre del Gasto</label>
            <input 
               type="text"
               className="u-full-width"
               placeholder="Ej: Transporte"
               value={nombre}
               onChange={e => guardarNombre(e.target.value)}
            />
         </div>
         <div className="campo">
            <label>Cantidad del Gasto</label>
            <input 
               type="number"
               className="u-full-width"
               placeholder="Ej: 300"
               value={cantidad}
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

Formulario.propTypes = {
   guardarGasto: PropTypes.func.isRequired,
   guardarCrearGasto: PropTypes.func.isRequired,
}
 
export default Formulario;