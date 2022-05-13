import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import irAlCarrito from "../imagenes/online-shopping.png";

const ItemCount = ({ detalle }) => {

    //Defino el consumer del contexto
    const { agregarAlCarrito, eliminarDelCarrito, enStock} = useContext(CartContext);


    const [cantidadDisponible, setCantidadDisponible] = useState(detalle.stock);    
    const [cantidad, setCantidad] = useState(detalle.cantidad);
    const [stock, setStock] = useState(detalle.stock);
    const [enElCarrito, setEnElCarrito] = useState(false);

    function handlerAgregarAlCarrito() {
        setCantidad(cantidad + 1);
        agregarAlCarrito({ detalle });
        setEnElCarrito(true)
    }

    function handlerEliminarDelCarrito() {
        setCantidad(cantidad - 1);
        if (cantidad < 0) {
            setCantidad(0);
        }
        eliminarDelCarrito({ detalle });
        if (cantidad == 0) {
            setEnElCarrito(false);
        }
    }

    function estadoCarrito() {
        return (cantidad > 0 ? true : false);
    }

    function quedaStock() {
        return ((stock - cantidad == 0) ? false : true);
    }


    function calcularExistenciasDisponibles() {
        var cantidadTotal = detalle.stock - detalle.cantidad;
        setCantidadDisponible(cantidadTotal);
        enStock(detalle.stock, detalle.cantidad);
    }

    useEffect(() => {
        estadoCarrito();
        quedaStock();
        enStock(detalle.stock, detalle.cantidad);
        calcularExistenciasDisponibles();
    }, [enElCarrito, cantidad])


    return (
        <>
            <div className="flex justify-center items-center flex-wrap m-3">
                {quedaStock() ?
                    <button onClick={handlerAgregarAlCarrito} className="bg-gray-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" > Agregar al Carrito</button>
                    :
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full">Agregar al Carrito</button>
                }
                <div className="text-lg font-bold ml-2 mr-2">{detalle.cantidad}</div>
                {estadoCarrito() ?
                    <button onClick={handlerEliminarDelCarrito} className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full" >Eliminar del Carrito</button>
                    :
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full">Eliminar del Carrito</button>
                }
            </div>
            <div className="mx-auto text-sm text-blue-600 mt-5 font-semibold">(Stock: {cantidadDisponible})</div>
            <div className="flex items-center">                
                {cantidad != 0 ?
                    <Link to="/cart" className="mx-auto"><button className="mx-auto flex items-center"><img src={irAlCarrito} className="w-20" /><div className="text-sm bg-gray-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full ">Finalizar Compra</div></button></Link>
                    :
                    <></>
                }
            </div>
        </>
    )
}
export default ItemCount