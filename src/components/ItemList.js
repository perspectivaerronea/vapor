import React, { useEffect, useState } from 'react';
import CardJuego from './CardJuego';

const ItemList = ({ listaJuegos }) => {
    return (
        <>
            {/* {players.map((player) => (<Player key={player.id} player={player} />))} */}
            {listaJuegos.map((juego) => (<CardJuego key={juego.id} datoJuego={juego} />))}
        </>
    )
}

export default ItemList;