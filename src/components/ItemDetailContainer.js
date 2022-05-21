import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import LoadSpinner from './LoadSpinner';

const ItemDetailContainer = () => {

    const [detalleJuego, setJuego] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {

        const getJuegos = () => {
            return new Promise((resolve, reject) => {

                const db = getFirestore();
                const docCollection = collection(db, 'juegos');
                
                const consulta = query(docCollection, where('id','==',parseInt(itemId)));
               
                getDocs(consulta).then(snapshot => {                    
                    if (snapshot.size > 0) {
                        const juegosData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }));                           
                        resolve(juegosData);                        
                    }
                })            
            })
        };

        setIsLoading(true);

        getJuegos()
            .then((result) => {setJuego(result); })
            .catch((err) => { console.log("Hubo un error. Falló la comunicación con Firebase"); })
            .finally(() => setIsLoading(false))
  

    }, [itemId])

    return (
        <div className="rounded m-10 flex items-center justify-center ">
            {isLoading ? <LoadSpinner /> : detalleJuego.map((d) => (<ItemDetail key={d.id} detalle={d} />))}            
        </div>
    )
}
export default ItemDetailContainer