import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartDetail from "./CartDetail"
import Finalizar from "./Finalizar";
import VaciarCarrito from "../imagenes/dump.png";

const CartDetailContainer = () => {

    const { listaCarrito, totalElementos, finCompra, calcularTotal, limpiarCarrito, terminarCompra } = useContext(CartContext);

    const [finalizar, setFinalizar] = useState(finCompra);

    const handlerFinalizarCompra = () => {
        setFinalizar(true);
        terminarCompra();
    }

    useEffect(() => {
        calcularTotal();
    }, [totalElementos, listaCarrito])

    return (
        <div className="flex-col justify-center items-center ">
            {(totalElementos > 0) ?
                <>
                    {finalizar ?
                        <div disabled> {listaCarrito.map((juego) => (<CartDetail key={juego.item.id} juego={juego} />))}</div>
                        :
                        <>{listaCarrito.map((juego) => (<CartDetail key={juego.item.id} juego={juego} />))}</>
                    }
                    <div className="flex justify-center items-center">
                        <button onClick={handlerFinalizarCompra} className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"> Generar Códigos</button>
                        <button onClick={limpiarCarrito}><img src={VaciarCarrito} alt="Vaciar Carrito" className="h-10 ml-4" /></button>
                    </div>
                    {finalizar ? <>{listaCarrito.map((juego) => (<Finalizar key={juego.item.id} juego={juego} />))}</> : <></>}
                </>
                : <Link to="/"> <div className="w-1/3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mx-auto">No hay elementos en el carrito aún</div></Link>
            }
        </div>
    )
}
export default CartDetailContainer