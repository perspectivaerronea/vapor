import React from 'react';
import Carwidget from './Carwidget';
import logo from '../imagenes/logosteam.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container flex items-center align-middle  px-5 pt-1">
            <Link to="/" className="flex flex-none items-center align-middle px-2 font-['Fira Sans'] font-bold text-black">
                <img src={logo} alt='logo' className="m-2 h-10 w-10"/> 
                <span>Vapor</span>
            </Link>
            <nav className="flex-1 justify-between m-4">
                <Link to="/steam" className="hover:text-red-300 m-2"> Steam</Link>
                <Link to="/epic" className="hover:text-red-300 m-2"> Epic</Link>
                <Link to="/itchio" className="hover:text-red-300 m-2"> Itchio</Link>
            </nav>
            <Carwidget/>
        </div>
    )
}

export default NavBar;
