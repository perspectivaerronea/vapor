import React, { useContext } from 'react';
import Carwidget from './Carwidget';
import logo from '../imagenes/logosteam.png';
import top from '../imagenes/top.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const NavBar = () => {

    const { finCompra, limpiarCarrito } = useContext(CartContext);

    return (
        <div className="container flex items-center align-middle  px-5 pt-1">
            <Link to="/" onClick={finCompra && limpiarCarrito} className="flex flex-none items-center align-middle px-2 font-['Fira Sans'] font-bold text-black w-1/12">
                <img src={logo} alt='logo' className="m-2 h-10 w-10" />
                <span>Vapor</span>
            </Link>
            <nav className="flex-1 justify-between m-4 w-9/12">
                <Link to="/steam" onClick={finCompra && limpiarCarrito} className="hover:text-red-300 m-2"> Steam</Link>
                <Link to="/epic" onClick={finCompra && limpiarCarrito} className="hover:text-red-300 m-2"> Epic</Link>
                <Link to="/itchio" onClick={finCompra && limpiarCarrito} className="hover:text-red-300 m-2"> Itchio</Link>                
                <Link to="/top" onClick={finCompra && limpiarCarrito} className="text-yellow-400 hover:text-red-300"> Top<img src={top} alt='top' className="inline h-7 ml-2" />  </Link>                 
            </nav>
            <div className="w-1/12">                                
                <Carwidget />                
            </div>            
            
        </div>
        
    )
}

export default NavBar;
