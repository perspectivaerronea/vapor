import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {

    const { agregarAlCarrito, eliminarDelCarrito, estaEnElCarrito } = useContext(CartContext);
    const [ cantidad, setCantidad ] = useState(detalle.cantidad);    

    function handlerAgregarCarrito() {
        agregarAlCarrito({ detalle });
    }

    function handlerEliminarCarrito() {
        eliminarDelCarrito({ detalle });
    }

    useEffect(() => {
        if (detalle != undefined) {
            var encontrado = estaEnElCarrito({ detalle });

            if (encontrado) {
                setCantidad(encontrado.qty);
            } else {                
                setCantidad(0);
            }
        }
    })

    return (
        <>
            <div className="bg-white rounded mx-auto p-5 w-1/2">
                <div className="">
                    <img className="w-900 mx-auto" src={detalle.imagen} alt={detalle.nombre} />
                </div>
                <div className="mt-5" >
                    <span className="text-lg font-semibold uppercase tracking-wide  ">{detalle.nombre}</span>
                    <p>{detalle.descripcion}</p>
                    <h2 className="text-red-600 mt-5">{detalle.precio} {detalle.moneda}</h2>
                </div>
                <ItemCount stock={detalle.stock} cantidad={cantidad} onAdd={handlerAgregarCarrito} onDelete={handlerEliminarCarrito} />
            </div>
        </>
    )
}

export default ItemDetail;