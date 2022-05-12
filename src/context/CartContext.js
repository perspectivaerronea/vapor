import { createContext, useState } from "react";

export const CartContext = createContext({
    listaCarrito: [{}],
    totalElementos: 0,
    agregarAlCarrito: () => { },
    eliminarDelCarrito: () => { },
    sumarItem: () => { },
    restarItem: () => { }/*,
    limpiarCarrito: () => { },
    terminarCompra: () => { }*/
})

const CartContextProvider = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);
    const [totalElementos, setTotalElementos] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: {cantidad} };

        itemNuevo.item = detalle;
        setCantidad(itemNuevo.qty + 1);
        itemNuevo.qty = cantidad;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {            
            setCantidad(encontrado.qty + 1);
            encontrado.qty = cantidad;            
        } else {
            setListaCarrito(
                currentListaCarrito => {
                    return currentListaCarrito.concat(itemNuevo);
                }
            )

            setCantidad(listaCarrito.qty + 1);
            listaCarrito.qty = cantidad;

        }

        setTotalElementos();
    }

    const eliminarDelCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {

            setCantidad(encontrado.qty - 1);
            encontrado.qty = cantidad;
            
            if (encontrado.qty == 0) {

                var lista = listaCarrito;
                lista.splice(lista.indexOf(encontrado), 1);

                setListaCarrito(lista);
            }
        }

        console.log(listaCarrito);
        setTotalElementos();
    }

    const sumarItem = ({ juego }) => {

        console.log(juego);

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);

        if (encontrado) {
            setCantidad(encontrado.qty + 1);
            encontrado.qty = cantidad;
        }

        setTotalElementos();
    }


    const restarItem = ({ juego }) => {

        console.log(juego);

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);

        if (encontrado) {
            setCantidad(encontrado.qty - 1);
            encontrado.qty = cantidad;

            if (encontrado.qty == 0) {
                var lista = listaCarrito;
                lista.splice(lista.indexOf(encontrado), 1);
                setListaCarrito(lista);
            }
        }

        setTotalElementos();
    }

    function calcularTotalElementos() {
        var total = 0;

        listaCarrito.forEach(item => total += item.qty);

        console.log(total);

        setTotalElementos(total);

    }

    const context = {
        listaCarrito,
        totalElementos,
        agregarAlCarrito,
        eliminarDelCarrito,
        sumarItem,
        restarItem
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;