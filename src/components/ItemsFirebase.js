import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";



const ItemsFirebase = () => {

    const [juego, setJuego] = useState([]);

    useEffect(() => {
        getJuegos();
    }, [])

    const getJuegos = () => {
        const db = getFirestore();
        const docCollection = collection(db, 'juegos');
        getDocs(docCollection).then(snapshot => {
            if (snapshot.size > 0) {
                console.log(snapshot);
                const ids = snapshot.docs.map(d => d.id).join(',');
                // console.log(rutaImagens);
                console.log(ids);
                const juegosData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }))
                setJuego(juegosData);
                console.log(juegosData);
                const ruta = '../imagenes/' + juegosData.imagen;
                console.log(ruta);
            }
        })
    }

    const ruta = '../imagenes/' + juego.imagen;
    console.log(ruta);

    return (
        <>
            {juego.map(j =>
                <>
                    <div className="bg-white rounded mx-auto p-5 w-1/2">
                        <div className="">
                            <img className="w-900 mx-auto" src={j.imagen} alt={j.nombre} />
                        </div>
                        <div className="mt-5" >
                            <span className="text-lg font-semibold uppercase tracking-wide  ">{j.nombre}</span>
                            <p>{j.descripcion}</p>
                            <h2 className="text-red-600 mt-5">{j.precio} {j.moneda}</h2>
                        </div>
                        
                    </div>
                </>
            )}
        </>
    )
}
export default ItemsFirebase