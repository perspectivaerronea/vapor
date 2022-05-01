import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = ({ listaJuegos }) => {
    return (
        <>            
            {listaJuegos.map((juego) => (<Item key={juego.id} datoJuego={juego} />))}
        </>
    )
}

export default ItemList;