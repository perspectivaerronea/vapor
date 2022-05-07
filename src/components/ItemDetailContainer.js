import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JUEGOS as datosJuegos } from '../data/Juegos';
import ItemDetail from './ItemDetail';
import LoadSpinner from './LoadSpinner';

const ItemDetailContainer = () => {
    
    const [detalleJuego, setJuego] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { catId, itemId } = useParams();

    useEffect(() => {

        //Esto es una función asincrónica, anonima que se auto ejecuta
        /*(async () => {
            const itemData = await getItemDetail()
            if (itemData) {
                setJuego(itemData);
            } else {
                console.log("error");
            }

        })()*/

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
    
/*<ItemDetail detalle={detalleJuego} />*/
    return (
        <div className="rounded m-10">
            {isLoading ? <LoadSpinner /> : <ItemDetail detalle={detalleJuego} /> }                                    
        </div>
    )
}
export default ItemDetailContainer