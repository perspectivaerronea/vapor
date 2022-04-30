
const CardJuego = ({datoJuego}) => {       

        return (
        <>
          <div className="h-3/4 w-full">
            <img className="w-full h-full object-cover rounded-t" src={datoJuego.imagen} alt={datoJuego.name}/>
          </div>
          <div className="w-full h-1/4 p-3">
            <a href="#" className=" hover:text-yellow-600 text-gray-700">
              <span className="text-lg font-semibold uppercase tracking-wide ">{datoJuego.name}</span>
            </a>

            <p className="text-gray-600 text-sm leading-5 mt-1 line-through">{datoJuego.precio} {datoJuego.moneda}</p>
            <p className="text-red-600 text-sm leading-5 mt-1 ">0.00 {datoJuego.moneda}</p>
          </div>
        </>
    )
}
export default CardJuego