import TopList from './TopList';
import LoadSpinner from './LoadSpinner';
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";


const TopContainer = () => {

    const [top, setTop] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const elemento = {
        id: 0,
        nombre: '',
        cantidad: 0
    }

    useEffect(() => {

        const getTopJuegos = () => {
            return new Promise((resolve, reject) => {

                const db = getFirestore();
                const docCollection = collection(db, 'top');

                // const consulta = query(docCollection, where('id','==',parseInt(itemId)));
                const consulta = query(docCollection, orderBy("cantidad", "desc"));

                getDocs(consulta).then(snapshot => {
                    const topData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }));
                    resolve(topData);
                })
            })
        };

        setIsLoading(true);

        getTopJuegos()
            .then((result) => { setTop(result); })
            .catch((err) => { console.log("Hubo un error. Falló la comunicación con Firebase"); })
            .finally(() => setIsLoading(false))

    }, []);

    return (
        <div className="py-6 items-center justify-center w-50 h-50">
            {isLoading ? <LoadSpinner /> : <TopList listaTop={top} />}
        </div>
    )
}

export default TopContainer