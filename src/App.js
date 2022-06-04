
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CartDetailContainer from './components/CartDetailContainer';
import TopContainer from './components/TopContainer';

function App() {

  return (
    <CartContextProvider>

      <div className="App bg-gray-500 ">
        <BrowserRouter>

          <header className="App-header">
            <NavBar />
          </header>

          <div className="h-fit">
            <Routes>

              <Route path='/'               element={<ItemListContainer />}   />
              <Route path='/vapor-padin/'   element={<ItemListContainer />}   />

              <Route path='/:catId'         element={<ItemListContainer />}   />

              <Route path="/:catId/:itemId" element={<ItemDetailContainer />} />

              <Route path="/cart"           element={<CartDetailContainer />} />

              <Route path="/top"           element={<TopContainer />} />

            </Routes>

          </div>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;

