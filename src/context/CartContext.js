import { createContext, useState } from "react";

export const CartContext = createContext({
    listaCarrito: [],
    totalElementos: 0,
    finCompra: false,
    hayStock: true,
    agregarAlCarrito: () => { },
    eliminarDelCarrito: () => { },
    sumarItem: () => { },
    restarItem: () => { },
    estaEnElCarrito: () => {},
    calcularTotal: () => {},
    enStock: () => {},
    limpiarCarrito: () => {},
    terminarCompra: () => {}
})

const CartContextProvider = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);
    const [totalElementos, setTotalElementos] = useState(0);
    const [finCompra, setFinalizar] = useState(false);
    const [hayStock, setHayStock] = useState(true);

    const estaEnElCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;
        itemNuevo.item.cantidad++;
        itemNuevo.qty++;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        return encontrado ? true : false;

    }

    const limpiarCarrito = (() => {        
        var lista = [];
        listaCarrito.forEach(item => {item.qty = 0; item.item.cantidad = 0});   
        setListaCarrito(lista);        
        calcularTotal();
        setFinalizar(false);
    })

    const agregarAlCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {
            encontrado.item.cantidad++;
            encontrado.qty++;
        } else {

            itemNuevo.item.cantidad++;
            itemNuevo.qty++;

            var lista = listaCarrito.concat(itemNuevo);
            setListaCarrito(currentLista => lista);                        
        }

        setTotalElementos(currentTotal => currentTotal+1);

    }

    const eliminarDelCarrito = ({ detalle }) => {

        const itemNuevo = { item: {}, qty: 0 };

        itemNuevo.item = detalle;

        const encontrado = listaCarrito.find(elemento => elemento.item.id === itemNuevo.item.id);

        if (encontrado) {

            encontrado.item.cantidad--;
            encontrado.qty--;

            if (encontrado.qty === 0) {

                var lista = listaCarrito;
                lista.splice(lista.indexOf(encontrado), 1);
                setListaCarrito(lista);
            }
        }

        setTotalElementos(currentTotal => currentTotal-1);


    }

    const sumarItem = ({ juego }) => {

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);
        if (encontrado) {
            encontrado.item.cantidad++;
            encontrado.qty++;
        }

        setTotalElementos(currentTotal => currentTotal+1);

    }


    const restarItem = ({ juego }) => {

        const encontrado = listaCarrito.find(elemento => elemento.item.id === juego.item.id);

        if (encontrado) {
            if (encontrado.qty > 0) {
                encontrado.item.cantidad--;
                encontrado.qty--;
            }

            if (encontrado.qty === 0) {
                var lista = listaCarrito;
                lista.splice(lista.indexOf(encontrado), 1);
                setListaCarrito(lista);
            }
        }

        setTotalElementos(currentTotal => currentTotal-1);        

    }

    const terminarCompra = () => {
        setFinalizar(true);
    }

    function calcularTotal() {
        var total = 0;

        listaCarrito.forEach(item => total += item.qty);        
        setTotalElementos(total);
    
    }

    function enStock(stock, cantidad){
        if((stock-cantidad) <= 0){
            setHayStock(false);
        } else{
            setHayStock(true);
        }
    }

    const context = {
        listaCarrito,
        totalElementos,
        finCompra,
        hayStock,
        agregarAlCarrito,
        eliminarDelCarrito,
        sumarItem,
        restarItem,
        calcularTotal,
        estaEnElCarrito,
        limpiarCarrito,
        terminarCompra,
        enStock
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;