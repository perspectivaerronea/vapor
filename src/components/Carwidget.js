import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import carritoVacio from '../imagenes/shopping_empty.png';
import carritoLleno from '../imagenes/shopping_full.png';

const Carwidget = () => {
  const { totalElementos } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(totalElementos);

  function estadoCarrito() {
    return (cantidad > 0 ? true : false);
  }

  useEffect(() => {
    setCantidad(totalElementos);    
  })

  return (
    <Link to="/cart">
      <button className="flex items-center"><img src={(estadoCarrito()) ? carritoLleno : carritoVacio} alt='carrito' className="m-2 h-20 w-20"></img> <div className={(estadoCarrito()) ? 'rounded-full bg-blue-400 px-3' : 'rounded-full px-3'} >{cantidad}</div></button>
    </Link>
  )
}

export default Carwidget;