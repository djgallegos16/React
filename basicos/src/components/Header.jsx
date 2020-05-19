import React from 'react';

function Header({titulo,numero}){
   return (
      <h1 className='encabezaddo'> {titulo} {numero} </h1>
   )
}

export default Header;