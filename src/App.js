
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MainPageList from './components/MainPageList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="App bg-gray-500">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>          

          <Route path='/vapor-padin/' element={<MainPageList/>}/>          

          <Route path='/vapor-padin/steam' element={<ItemListContainer lista='steam'/>} />
          <Route path='/vapor-padin/steam/:steamId' element={<ItemDetail tienda='steam'/>} />

          <Route path='/vapor-padin/epic' element={<ItemListContainer lista='epic'/>} />
          <Route path='/vapor-padin/epic/:epicId' element={<ItemDetail tienda='epic'/>} />

          <Route path='/vapor-padin/itchio' element={<ItemListContainer lista='itchio'/>} />
          <Route path='/vapor-padin/itchio/:itchioId' element={<ItemDetail tienda='itchio'/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App

