import ItemListContainer from "./ItemListContainer";
import steamLogo from '../imagenes/SteamLogo.png';
import epicLogo from '../imagenes/Epic_Games_logo.png';
import itchioLogo from '../imagenes/itch-io-logo.png';

const MainPageList = () => {
    return (
        <>
            <div>
                <div className='bg-gray-300'>
                    <img src={steamLogo} className='h-40 w-100 p-5 m-auto'></img>
                </div>
                <ItemListContainer lista='steam' />
            </div>
            <div>
                <div className='bg-gray-300'>
                    <img src={epicLogo} className='h-40 w-100 p-5 m-auto' ></img>
                </div>
                <ItemListContainer lista='epic' />
            </div>
            <div>
                <div className='bg-gray-300'>
                    <img src={itchioLogo} className='h-40 w-100 p-5 m-auto'></img>
                </div>
                <ItemListContainer lista='itchio' />
            </div>

        </>
    )
}
export default MainPageList