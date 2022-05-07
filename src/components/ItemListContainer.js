import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {JUEGOS as datosJuegos} from '../data/Juegos';
import LoadSpinner from './LoadSpinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {


  const [listaJuegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {catId} = useParams();

  useEffect(() => {

    //Se puede hacer una función flecha que devuelva la promesa en lugar de una promesa directamente, para ordenar mejor el código. 
    const getJuegos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {          
          //Trata de filtrar por algún valor, y si no trae resultados lista todo
          const categoria = catId ? datosJuegos.filter((juego) => juego.category === catId) : datosJuegos;

          resolve(categoria);

        }, 2000);
      })
    };

    setIsLoading(true);

    getJuegos()
      .then((result) => { setJuegos(result); })
      .catch((err) => { console.log("Hubo un error"); })
      .finally(() => setIsLoading(false))
  }, [catId]);


  return (
    <div className="py-6 flex items-center justify-center flex-wrap h-100">
      {isLoading ? <LoadSpinner /> : <ItemList listaJuegos={listaJuegos} />}
    </div>
  )
}

export default ItemListContainer;