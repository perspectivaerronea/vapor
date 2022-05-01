import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EPIC as datosJuegosEpic } from '../data/Epic';
import { STEAM as datosJuegosSteam } from '../data/Steam';
import { ITCHIO as datosJuegosItchio } from '../data/Itchio';

const ItemDetail = ({ tienda }) => {

    const { ItemId } = useParams({});
    const [juego, setJuego] = useState({});

    useEffect(() => {

        (async () => {
            const itemData = await getItemDetail()
            if (itemData) {
                setJuego(juego);
            }
        })()

    }, [ItemId])

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (tienda) {
                    case "epic":
                        resolve(datosJuegosEpic.find(juego => juego.id == ItemId));
                    case "steam":
                        resolve(datosJuegosSteam.find(juego => juego.id == ItemId));
                    case "itchio":
                        resolve(datosJuegosItchio.find(juego => juego.id == ItemId));
                }
            }, 3000);
        })

    }

    return (
        <div>ItemDetail</div>
    )
}
export default ItemDetail