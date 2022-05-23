import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import LoadSpinner from './LoadSpinner';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';

const ItemListContainer = () => {

  const [listaJuegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {

    //Se puede hacer una función flecha que devuelva la promesa en lugar de una promesa directamente, para ordenar mejor el código. 
    const getJuegos = () => {
      return new Promise((resolve, reject) => {

        let consultaTemp;
        const db = getFirestore();
        const docCollection = collection(db, "juegos");

        if (catId != undefined) {
          consultaTemp = query(docCollection, where("categoria", "==", catId));                    
        } else {
          consultaTemp = query(docCollection, orderBy("id", "asc"));
        }

        const consulta = consultaTemp;

        getDocs(consulta).then(snapshot => {
          if (snapshot.size > 0) {
            const juegosData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }))
            resolve(juegosData);
          }
        })
      })
    };

    setIsLoading(true);

    getJuegos()
      .then((result) => { setJuegos(result); })
      .catch((err) => { console.log("Hubo un error. Falló la comunicación con Firebase"); })
      .finally(() => setIsLoading(false))
  }, [catId]);


  return (
    <div className="py-6 flex items-center justify-center flex-wrap h-100">
      {isLoading ? <LoadSpinner /> : <ItemList listaJuegos={listaJuegos} />}
    </div>
  )
}

export default ItemListContainer;