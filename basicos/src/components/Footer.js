import React from 'react'; // imr importa react automaticamente

// sfc para que se escriba automaticamente la declaracion
// const Footer = () => {
//    return ( 
//       <footer>
//          <p>Todos los derechos reservados &copy;</p>
//       </footer>
//    );
// }
// funciona igual a la declaracion superor pero no necesita el return
const Footer = ({fecha}) => ( 
   <footer>
      <p>Todos los derechos reservados &copy; {fecha} </p>
   </footer>
);
 
export default Footer;