
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MainPageList from './components/MainPageList';
// import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App bg-gray-500 ">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <div className="h-fit">
        <Routes>          

          <Route path='/' element={<ItemListContainer/>}/>

          <Route path='/:catId' element={<ItemListContainer/>}/>
                  
          <Route path="/:catId/:itemId" element={<ItemDetailContainer />}/>
          
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App

