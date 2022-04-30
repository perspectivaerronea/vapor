import React, { useEffect, useState } from 'react';
import CardJuego from './CardJuego';

const ItemList = ({ datoJuego }) => {
    return (
        <div className="bg-white w-72 h-100 shadow-md rounded m-3">
            <CardJuego key={datoJuego.id} datoJuego={datoJuego} />
        </div>
    )
}

export default ItemList;