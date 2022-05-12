import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import agregar from "../imagenes/plus.png";
import quitar from "../imagenes/remove.png";

const CartDetail = () => {

    const { listaCarrito, sumarItem, restarItem } = useContext(CartContext); 

    console.log(listaCarrito);

    
    return (
        <>
            {listaCarrito.map((juego) => (
                <div key={juego.item.id} >
                    <div className="bg-white w-70 shadow-md rounded m-3 flex">
                        <div className="w-7/8 inline align-middle">
                            <div className="text-lg font-semibold uppercase pl-5 flex justify-between">
                                {juego.item.name}
                                {juego.item.tienda}
                                {juego.item.precio}
                                <div className="flex items-center">
                                <img className="h-10" src={agregar} onClick={()=>{sumarItem({juego})}}/>
                                <span className="pl-5 pr-5">{juego.qty}</span>
                                <img className="h-10" src={quitar} onClick={()=>{restarItem({juego})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )}
        </>
    )
}
export default CartDetail