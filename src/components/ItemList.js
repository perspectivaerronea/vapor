import React, { useEffect, useState } from 'react';
import CardJuego from './CardJuego';

const ItemList = ({ datoJuego }) => {
    return (
        <>
            <CardJuego key={datoJuego.id} datoJuego={datoJuego} />
        </>
    )
}

export default ItemList;