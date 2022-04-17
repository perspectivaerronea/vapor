import React from 'react';
import Carwidget from './Carwidget';
import logo from '../logosteam.png';

const NavBar = () => {
    return (
        <div className="container flex items-center align-middle  px-5">
            <a className="flex flex-none items-center align-middle px-2 font-['Fira Sans'] font-bold text-black" href='#'>
                <img src={logo} alt='logo' className="m-2 h-10 w-10"/> 
                Vapor
            </a>
            <nav className="flex-1 justify-center">
                <a className="hover:text-red-300 m-2" href='#'> Destacados</a>
                <a className="hover:text-red-300 m-2" href='#'> Promociones</a>
                <a className="hover:text-red-300 m-2" href='#'> Gratis</a>
                <a className="hover:text-red-300 m-2" href='#'> Próximamente</a>
                <a className="hover:text-red-300 m-2" href='#'> Lista Deseados</a>
            </nav>
            <Carwidget/>
        </div>
    )
}

export default NavBar;
