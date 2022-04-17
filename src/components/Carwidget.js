import React from 'react';
import carrito from '../cart.png';

const Carwidget = () => {
  return (
    <button className="flex-none items-end"><img src={carrito} alt='carrito' className="m-2 h-10 w-20"></img></button>
  )
}

export default Carwidget;