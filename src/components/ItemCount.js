import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import irAlCarrito from "../imagenes/online-shopping.png";

const ItemCount = (props) => {

    const {enStock} = useContext(CartContext);

    const [cantidadDisponible, setCantidadDisponible] = useState(props.stock);
    const [disponible, setDisponible] = useState(true);

    function calcularExistenciasDisponibles(){
        var cantidadTotal = props.stock-props.cantidad;
        setCantidadDisponible(cantidadTotal);
        if(cantidadTotal <= 0){
            setDisponible(false);    
        } else {
            setDisponible(true);
        }
        enStock(props.stock,props.cantidad);
    }

    useEffect(() => {
        calcularExistenciasDisponibles();
    })


    return (
        <div className="flex items-center">  
            {disponible ?
                <div className="mx-auto text-sm text-blue-600 mt-5 font-semibold">(Stock: {cantidadDisponible})</div>            
                :
                <Link to="/cart"  className="mx-auto"><button className="mx-auto flex items-center"><img src={irAlCarrito} className="w-20"/><div className="text-sm bg-gray-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full ">Finalizar Compra</div></button></Link>
            }
        </div>
    )
}
export default ItemCount