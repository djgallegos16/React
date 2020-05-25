import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'; //crear id automatico

const Formulario = ({crearCita}) => {

   // state de cita
   const [cita, actualizarCita] = useState({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
   })

   const [error, actualizarError] = useState(false)

   // funcion que detecta el cambio en el imput
   const handleChange = e => {
      console.log(e.target.name) // obtiene la propiedad name del iut
      actualizarCita({
         ... cita, // copia para mantener todos los datos llenados en el formulario
         [e.target.name]: e.target.value 
      })
   }

   // extraer los valores
   const { mascota, propietario, fecha, hora, sintomas } = cita;

   // Enviar formulario
   const guardarCita = e => {
      e.preventDefault();
      // validar campos vacios
      if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
         actualizarError(true);
         return;
      }
      actualizarError(false);
      
      // asignar key
      cita.id=uuid() // asignar id automatico a cada cita

      // crear cita
      crearCita(cita)

      // reiniciar formulario
      actualizarCita({
         mascota:'',
         propietario:'',
         fecha:'',
         hora:'',
         sintomas:''
      })
   }


   return (
      <Fragment>
         <h2>Crear Cita</h2>
         {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
         <form
            onSubmit={guardarCita}
         >
            <label>Nombre Mascota</label>
            <input 
               type="text"
               name="mascota"
               className="u-full-width"
               placeholder="Nombre Mascota"
               onChange={handleChange}
               value={mascota}
            />
            <label>Nombre Dueño</label>
            <input 
               type="text"
               name="propietario"
               className="u-full-width"
               placeholder="Nombre del Dueño de la mascota"
               onChange={handleChange}
               value={propietario}
            />
            <label>Fecha</label>
            <input 
               type="date"
               name="fecha"
               className="u-full-width"
               onChange={handleChange}
               value={fecha}
            />
            <label>Hora</label>
            <input 
               type="time"
               name="hora"
               className="u-full-width"
               onChange={handleChange}
               value={hora}
            />
            <label>Síntomas</label>
            <textarea
               className="u-full-width"
               name="sintomas"
               onChange={handleChange}
               value={sintomas}
            ></textarea>

            <button
               type="submit"
               className="u-full-width button-primary"
            >Agregar Cita</button>
         </form>
      </Fragment>
   );
}
 
export default Formulario;