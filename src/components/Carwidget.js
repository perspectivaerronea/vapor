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
    console.log(totalElementos);
  })

  return (
    <Link to="/cart">
      <button className="flex-none items-end"><img src={(estadoCarrito()) ? carritoLleno : carritoVacio} alt='carrito' className="m-2 h-20 w-20"></img></button>
    </Link>
  )
}

export default Carwidget;