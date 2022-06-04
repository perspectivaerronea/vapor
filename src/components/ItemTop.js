import { Link } from "react-router-dom";

const ItemTop = ({ datoJuego }) => {

    const ruta = '/' + datoJuego.categoria + '/' + datoJuego.id;

    return (
      <Link to={ruta}>        
        <div className="bg-white w-60 h-100 shadow-md rounded mb-5">
          <div>
            <img className="object-cover rounded-t" src={datoJuego.imagen} alt={datoJuego.nombre} />
          </div>
          <div className="w-full h-1/9 p-3">
            <span className="text-lg font-semibold uppercase tracking-wide ">{datoJuego.nombre}</span>
          </div>
          <div className="w-full h-1/9 p-3 bg-zinc-800">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">Unidades vendidas: {datoJuego.cantidad}</span>
          </div>
        </div>
      </Link>
    )
}
export default ItemTop