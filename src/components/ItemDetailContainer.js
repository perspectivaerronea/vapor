import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { JUEGOS as datosJuegos } from '../data/Juegos';
import ItemDetail from './ItemDetail';
import LoadSpinner from './LoadSpinner';

const ItemDetailContainer = () => {
    
    const cart = useContext(CartContext);

    const [detalleJuego, setJuego] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { catId, itemId } = useParams();

    useEffect(() => {
        
        const getJuego = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    
                    const juego  = datosJuegos.find((juego) => juego.id == itemId);                                        
                    resolve(juego);

                }, 2000);
            })
        };

        setIsLoading(true);

        getJuego()
            .then((result) => { setJuego(result); })
            .catch((err) => { console.log("Hubo un error"); })
            .finally(() => setIsLoading(false))

    }, [itemId])
    
    return (
        <div className="rounded m-10 flex items-center justify-center ">
            {isLoading ? <LoadSpinner /> : <ItemDetail detalle={detalleJuego} /> }                  
        </div>
    )
}
export default ItemDetailContainer