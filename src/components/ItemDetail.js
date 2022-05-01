import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EPIC as datosJuegosEpic } from '../data/Epic';
import { STEAM as datosJuegosSteam } from '../data/Steam';
import { ITCHIO as datosJuegosItchio } from '../data/Itchio';

const ItemDetail = ({ tienda }) => {

    const { ItemId } = useParams()
    const [detalleJuego, setJuego] = useState({})

    useEffect(() => {

        //Esto es una función asincrónica, anonima que se auto ejecuta
        (async () => {
            const itemData = await getItemDetail()
            if (itemData) {
                setJuego(itemData);
            } else {
                console.log("error");
            }

        })()

    }, [ItemId])

    const getItemDetail = () => {
        return new Promise((resolve) => {
            setTimeout(() => {                
                switch (tienda) {
                    case "epic":
                        resolve(datosJuegosEpic.find(juego => juego.id == ItemId));
                    case "steam":
                        resolve(datosJuegosSteam.find(juego => juego.id == ItemId));
                    case "itchio":
                        resolve(datosJuegosItchio.find(juego => juego.id == ItemId));
                }
            }, 0);
        })

    }


    /*
    {   id
        name
        fechaDesde
        fechaHasta
        precio
        moneda
        imagen
        descripcion
        link
        tienda
    },
    */

    return (        
        <div className="bg-white rounded m-3">
            <h1 className="text-3xl text-left">{detalleJuego.name}</h1>
        </div>
    )
}
export default ItemDetail