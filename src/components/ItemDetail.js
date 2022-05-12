import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {    

    const [enElCarrito, setEnElCarrito] = useState(false);

    //Defino el consumer del contexto
    const { agregarAlCarrito,eliminarDelCarrito } = useContext(CartContext);

    function handlerAgregarAlCarrito(){
        // setEnElCarrito(true);        
        agregarAlCarrito({detalle});
    }

    function handlerEliminarDelCarrito(){
        eliminarDelCarrito({detalle});
    }


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
                <button onClick={handlerAgregarAlCarrito} className="bg-gray-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mt-5" > Agregar al Carrito</button>
                <button  onClick={handlerEliminarDelCarrito} className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full  ml-2">Eliminar del Carrito </button>

            </div>        
        </>
    )
}

export default ItemDetail;