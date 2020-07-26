import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

   // state de cantidad
   const [ cantidad, guardarCantidad ] = useState(0);
   const [ error, guardarError ] = useState(false);

   // Funcion para leer el pressupuesto
   const definirPresupuesto = e => {
      guardarCantidad(parseInt(e.target.value, 10))
   }

   // submit para definir el presupuesto
   const agregarPresupuesto = e => {
      e.preventDefault();
      // Validar
      if(cantidad<1 || isNaN(cantidad)){
         guardarError(true);
         return;
      }
      // si pasa la validacion
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      actualizarPregunta(false);
   }

   return (
      <Fragment>
         <h2>Ingresa tu presupuesto</h2>
         {error ? <Error mensaje="El presupuesto debe ser mayor a 1" /> :null}
         <form onSubmit={agregarPresupuesto}>
            <input 
               type="number"
               className="u-full-width"
               placeholder="Presupuesto"
               onChange={definirPresupuesto}
            />
            <input 
               type="submit"
               className="button-primary u-full-width"
               value="Definir Presupuesto"
            />
         </form>
      </Fragment>
   );
}
 
Pregunta.propTypes = {
   guardarPresupuesto: PropTypes.func.isRequired,
   guardarRestante: PropTypes.func.isRequired,
   actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;