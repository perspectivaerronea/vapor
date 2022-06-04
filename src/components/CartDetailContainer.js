import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartDetail from "./CartDetail"
import Finalizar from "./Finalizar";
import VaciarCarrito from "../imagenes/dump.png";
import FinalizarCompra from "../imagenes/finish-line.png";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";

const CartDetailContainer = () => {

    const { listaCarrito, totalElementos, totalPrecio, finCompra, calcularTotal, limpiarCarrito, terminarCompra } = useContext(CartContext);

    const [finalizar, setFinalizar] = useState(finCompra);

    const [top, setTop] = useState({});

    const elemento = {
        id: 0,
        nombre: '',
        cantidad: 0
    }

    const handlerGenerarCodigos = () => {
        setFinalizar(true);
        terminarCompra();
    }

    const handlerFinalizarCompra = () => {
        listaCarrito.map((juego) => buscarCargarTop({ juego }));
        limpiarCarrito();
    }

    const buscarCargarTop = ({ juego }) => {

        try {
                const db = getFirestore();
                const docCollection = collection(db, 'top');
                const consulta = query(docCollection, where('id', '==', juego.item.id));

                const qty = juego.qty;
                
                getDocs(consulta).then(async (snapshot) => {

                    elemento.id = juego.item.id;
                    elemento.nombre = juego.item.nombre;
                    elemento.cantidad = qty;

                    if (snapshot.size > 0) {
                        const IdDocument = snapshot.docs[0].id;
                        const juegosData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }));
                        const nuevaCantidad = parseInt(juegosData[0].cantidad) + parseInt(elemento.cantidad);
                        const docToUpdate = doc(db, 'top', IdDocument);
                        try {
                            await updateDoc(docToUpdate, { cantidad: nuevaCantidad })
                        } catch (err) {
                            console.log('Hubo algún error', err);
                        }
                    } else {
                         const IdDocument = await addDoc(collection(db, 'top'), elemento);
                    }
                }).catch((err) => {
                    console.log("Hubo un incoveniente con la carga", err);
                });
        } catch (err) {
            console.log('Hubo algún error', err);
        }
    }

    useEffect(() => {
        calcularTotal();
    }, [totalElementos, listaCarrito, totalPrecio])


    return (
        <div className="flex-col justify-center items-center ">
            {(totalElementos > 0) ?
                <>
                    <div disabled={finalizar}>
                        {listaCarrito.map((juego) => (<CartDetail key={juego.item.id} juego={juego} />))}
                        <div className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl m-2 w-60 mx-auto">Precio Total: {totalPrecio} usd</div>
                        <div className="flex justify-center items-center">
                            <button onClick={handlerGenerarCodigos} className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"> Generar Códigos</button>
                            <button onClick={limpiarCarrito}><img src={VaciarCarrito} alt="Vaciar Carrito" className="h-10 ml-4" /></button>
                        </div>
                    </div >

                    {finalizar &&
                        <>
                            <div>{listaCarrito.map((juego) => (<Finalizar key={juego.item.id} juego={juego} />))}</div>
                            <Link to="/" >
                                <button onClick={handlerFinalizarCompra} className="border-2 border-teal-800 rounded-full p-3" >
                                    <img src={FinalizarCompra} alt="Finalizar" className="mx-auto flex items-center w-20" />
                                    <div className="text-md text-white font-bold py-2 px-4 rounded-full ">Finalizar Compra</div>
                                </button>
                            </Link>
                        </>
                    }
                </>
                : <Link to="/"> <div className="w-1/3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mx-auto">No hay elementos en el carrito aún</div></Link>
            }
        </div >
    )
}
export default CartDetailContainer