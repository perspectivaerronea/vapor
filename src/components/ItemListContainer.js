import React, { useEffect, useState } from 'react';
import CardJuego from './CardJuego';
import { juegos as datosJuegos } from '../juegos';

const ItemListContainer = () => {


  const [listaJuegos, setJuegos] = useState([])

  useEffect(() => {

    const getJuegos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datosJuegos);
      }, 2000);
    });

    getJuegos.then((result) => {      
      setJuegos(result);
    }).catch((err) => {
      console.log("Hubo un error");
    })
  }, []);

  return (
    <div className="py-6 flex items-center justify-center flex-wrap">
      {listaJuegos.map( juego => <CardJuego key={juego.id} datoJuego={juego}/> )}          
    </div>
  )
}

export default ItemListContainer;