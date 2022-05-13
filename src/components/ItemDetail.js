import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {

    const [cantidad, setCantidad] = useState(detalle.cantidad);
    const [stock, setStock] = useState(detalle.stock);
    const [enElCarrito, setEnElCarrito] = useState(false);


    //Defino el consumer del contexto
    const { agregarAlCarrito, eliminarDelCarrito, enStock, hayStock } = useContext(CartContext);

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

    useEffect(() => {
        estadoCarrito();
        quedaStock();
        enStock(detalle.stock, detalle.cantidad);
    }, [enElCarrito, cantidad])

    return (
        <>
            <div className="bg-white rounded mx-auto p-5 w-1/2">
                <div className="">
                    <img className="w-900 mx-auto" src={detalle.imagen} alt={detalle.name} />
                </div>
                <div className="mt-5" >
                    <span className="text-lg font-semibold uppercase tracking-wide  ">{detalle.name}</span>
                    <p>{detalle.descripcion}</p>
                    <h2 className="text-red-600 mt-5">{detalle.precio} {detalle.moneda}</h2>
                </div>
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
                <ItemCount stock={detalle.stock} cantidad={detalle.cantidad} />
            </div>
        </>
    )
}

export default ItemDetail;