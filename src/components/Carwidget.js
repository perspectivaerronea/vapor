import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import carrito from '../imagenes/cart.png';

const Carwidget = () => {


  const { totalElementos } = useContext(CartContext);

  return (
    <Link to="/cart">
      <button className="flex-none items-end"><img src={carrito} alt='carrito' className="m-2 h-10 w-20"></img> <span>{totalElementos}</span> </button>
    </Link>
  )
}

export default Carwidget;