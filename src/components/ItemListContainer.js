import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { juegos as datosJuegos } from '../juegos';
import LoadSpinner from './LoadSpinner';

const ItemListContainer = () => {


  const [listaJuegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getJuegos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datosJuegos);
      }, 4000);
    });

    setIsLoading(true);
    getJuegos.then((result) => {            
      setJuegos(result);
    }).catch((err) => {
      console.log("Hubo un error");
    }).finally(() => setIsLoading(false))
  }, []);

  return (    
    <div className="py-6 flex items-center justify-center flex-wrap">      
      {isLoading ? <LoadSpinner/> : <ItemList listaJuegos={listaJuegos}/>}
    </div>
  )
}

export default ItemListContainer;