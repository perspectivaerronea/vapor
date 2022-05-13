import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import agregar from "../imagenes/plus.png";
import quitar from "../imagenes/remove.png";

const CartDetail = ({juego}) => {

    const [cantidad,setCantidad] = useState(juego.qty);    

    const handlerSumarItem = () => {
        setCantidad(cantidad+1);
        sumarItem({juego});
    }

    const handlerRestarItem = () => {
        setCantidad(cantidad-1);
        restarItem({juego});
        if(cantidad === 0){

        }
    }

    const {sumarItem, restarItem } = useContext(CartContext);

    const rutaEmpresa = '/' + juego.item.category ;
    const rutaJuego = '/' + juego.item.category + '/' + juego.item.id;
   

    return (
        <>
        {(juego.item.cantidad>0) ?        
            <div className="bg-white w-2/3 shadow-md rounded m-3 mx-auto">
                <div className="w-7/8 inline align-middle">
                    <div className="text-lg font-semibold uppercase p-2 flex  justify-between items-center">
                        <Link to={rutaJuego} className="w-4/12 text-left hover:text-blue-600">{juego.item.name}</Link>
                        <Link to={rutaEmpresa} className="w-6/12 hover:text-blue-600">{juego.item.tienda}</Link>                                      
                        <div className="w-2/12 flex items-center">
                            <button onClick={handlerSumarItem}><img className="h-10" src={agregar} alt="Agregar" /></button>
                            <span className="pl-5 pr-5">{cantidad}</span>                        
                            <button onClick={handlerRestarItem}><img className="h-10" src={quitar} alt="Quitar"  /></button>
                        </div>
                    </div>
                </div>
            </div>: <></>}
        </>
    )
}
export default CartDetail