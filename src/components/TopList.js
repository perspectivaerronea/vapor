import ItemTop from "./ItemTop";

const TopList = ({ listaTop }) => {

    var i = 1;

    return (
        <ul>
            {listaTop.map((juego) => (
                <li className="flex items-center justify-center h-full "> 
                    <div className="bg-slate-700 text-orange-500 text-8xl mr-3 object-cover rounded-3xl p-3 " >{i<10?'0' + i++ : i++}</div>                    
                    <ItemTop key={juego.id} datoJuego={juego}/>
                </li>
            ))}
        </ul>
    )
}
export default TopList