import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartDetail from "./CartDetail"
import Finalizar from "./Finalizar";
import VaciarCarrito from "../imagenes/dump.png";
import FinalizarCompra from "../imagenes/finish-line.png";

const CartDetailContainer = () => {

    const { listaCarrito, totalElementos, totalPrecio, finCompra, calcularTotal, limpiarCarrito, terminarCompra } = useContext(CartContext);

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
                        <div disabled>
                            {listaCarrito.map((juego) => (<CartDetail key={juego.item.id} juego={juego} />))}
                            <div disabled className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl m-2 w-60 mx-auto">Precio Total: {totalPrecio}</div>
                            <div disabled className="flex justify-center items-center">
                                <button className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"> Generar Códigos</button>
                                <button ><img src={VaciarCarrito} alt="Vaciar Carrito" className="h-10 ml-4" /></button>
                            </div>
                        </div>
                        :
                        <>
                            {listaCarrito.map((juego) => (<CartDetail key={juego.item.id} juego={juego} />))}
                            <div className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl m-2 w-60 mx-auto">Precio Total: {totalPrecio}</div>
                            <div className="flex justify-center items-center">
                                <button onClick={handlerFinalizarCompra} className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"> Generar Códigos</button>
                                <button onClick={limpiarCarrito}><img src={VaciarCarrito} alt="Vaciar Carrito" className="h-10 ml-4" /></button>
                            </div>
                        </>
                    }                    
                    {finalizar ? 
                        <>                            
                            {listaCarrito.map((juego) => (<Finalizar key={juego.item.id} juego={juego} />))}
                        </> : 
                        <>
                        </>}
                    {finalizar ?
                        <Link to="/" >
                            <button onClick={limpiarCarrito} className="border-2 border-teal-800 rounded-full p-3" >
                                <img src={FinalizarCompra} alt="Finalizar" className="mx-auto flex items-center w-20" />
                                <div className="text-md text-white font-bold py-2 px-4 rounded-full ">Finalizar Compra</div>
                            </button>
                        </Link>
                        : <></>}
                </>
                : <Link to="/"> <div className="w-1/3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mx-auto">No hay elementos en el carrito aún</div></Link>
            }
        </div >
    )
}
export default CartDetailContainer