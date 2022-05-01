import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { EPIC as datosJuegosEpic } from '../data/Epic';
import { STEAM as datosJuegosSteam } from '../data/Steam';
import { ITCHIO as datosJuegosItchio } from '../data/Itchio';
import LoadSpinner from './LoadSpinner';

const ItemListContainer = ({lista}) => {


  const [listaJuegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    //Se puede hacer una función flecha que devuelva la promesa en lugar de una promesa directamente, para ordenar mejor el código. 
    const getJuegos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {          
          switch (lista) {
            case "epic":
              resolve(datosJuegosEpic);
            case "steam":
              resolve(datosJuegosSteam);
            case "itchio":
              resolve(datosJuegosItchio);
          }
        }, 1000);
      })
    };
    setIsLoading(true);
    getJuegos()
      .then((result) => { setJuegos(result); })
      .catch((err) => { console.log("Hubo un error"); })
      .finally(() => setIsLoading(false))
  }, [lista]);

  return (
    <div className="py-6 flex items-center justify-center flex-wrap h-100">
      {isLoading ? <LoadSpinner /> : <ItemList listaJuegos={listaJuegos} />}
    </div>
  )
}

export default ItemListContainer;