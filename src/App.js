
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
        <div className="h-fit">
        <Routes>          

          <Route path='/' element={<MainPageList/>}/>          

          <Route path='/steam' element={<ItemListContainer lista='steam'/>} />
          <Route path='/steam/:ItemId' element={<ItemDetail tienda='steam'/>} />

          <Route path='/epic' element={<ItemListContainer lista='epic'/>} />
          <Route path='/epic/:ItemId' element={<ItemDetail tienda='epic'/>} />

          <Route path='/itchio' element={<ItemListContainer lista='itchio'/>} />
          <Route path='/itchio/:ItemId' element={<ItemDetail tienda='itchio'/>} />

        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App

