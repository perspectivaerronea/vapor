
const ItemDetail = ({ detalle }) => {    
    return (
        <>
            <div className="bg-white rounded m-5 p-5">
                <div className="h-1/2 w-1/2 mx-auto">
                    <img className="w-full h-full object-cover rounded-t" src={detalle.imagen} alt={detalle.name} />
                </div>
                <div className="w-1/2 p-3 mx-auto" >
                    <span className="text-lg font-semibold uppercase tracking-wide ">{detalle.name}</span>
                    <p>{detalle.descripcion}</p>                      
                </div>
                <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href={detalle.link} target="_blank">Obtener</a></button>      
            </div>        
        </>
    )
}

export default ItemDetail;