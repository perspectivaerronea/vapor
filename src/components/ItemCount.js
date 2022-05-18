import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import irAlCarrito from "../imagenes/online-shopping.png";

// const ItemCount = ({ detalle }) => {

 const ItemCount = ({ stock, cantidad, onAdd, onDelete }) => {

    //Defino el consumer del contexto
    const { enStock } = useContext(CartContext);


    const [cantidadDisponible, setCantidadDisponible] = useState(stock);
    const [cantidadLocal, setCantidad] = useState(cantidad);
    const [enElCarrito, setEnElCarrito] = useState(false);

    function handlerAgregarAlCarrito() {
        setCantidad((cantidadLocal) => { return cantidadLocal + 1 });
        onAdd();
        setEnElCarrito(true)
    }

    function handlerEliminarDelCarrito() {
        setCantidad((cantidadLocal) => { return cantidadLocal - 1 });
        if (cantidadLocal < 0) {
            setCantidad(0);
        }
        onDelete();
        if (cantidadLocal == 0) {
            setEnElCarrito(false);
        }
    }

    function estadoCarrito() {
        return (cantidadLocal > 0 ? true : false);
    }

    function quedaStock() {
        return ((stock - cantidadLocal == 0) ? false : true);
    }


    function calcularExistenciasDisponibles() {
        setCantidadDisponible((cantidadDisponible)=>{return stock-cantidadLocal})
        enStock(stock, cantidadLocal);
    }

    useEffect(() => {

    })

    useEffect(() => {
        estadoCarrito();
        quedaStock();
        enStock(stock, cantidadLocal);
        calcularExistenciasDisponibles();
    }, [enElCarrito, cantidadLocal])


    return (
        <>
            <div className="flex justify-center items-center flex-wrap m-3">
                {quedaStock() ?
                    <button onClick={handlerAgregarAlCarrito} className="bg-gray-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" > Agregar al Carrito</button>
                    :
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full">Agregar al Carrito</button>
                }
                <div className="text-lg font-bold ml-2 mr-2">{cantidadLocal}</div>
                {estadoCarrito() ?
                    <button onClick={handlerEliminarDelCarrito} className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full" >Eliminar del Carrito</button>
                    :
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full">Eliminar del Carrito</button>
                }
            </div>
            <div className="mx-auto text-sm text-blue-600 mt-5 font-semibold">(Stock: {cantidadDisponible})</div>
            <div className="flex items-center">
                {cantidadLocal != 0 ?
                    <Link to="/cart" className="mx-auto"><button className="mx-auto flex items-center"><img src={irAlCarrito} className="w-20" /><div className="text-sm bg-gray-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full ">Finalizar Compra</div></button></Link>
                    :
                    <></>
                }
            </div>
        </>
    )
}
export default ItemCount