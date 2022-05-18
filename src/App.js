
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CartDetailContainer from './components/CartDetailContainer';
import PruebaFirebase from './shop/PruebaFirebase';
import ItemsFirebase from './components/ItemsFirebase';

function App() {

  // const cart = useContext(CartContext);


  return (
    <CartContextProvider>

      <div className="App bg-gray-500 ">
        <BrowserRouter>

          <header className="App-header">
            <NavBar />
          </header>

          <div className="h-fit">
            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/vapor-padin/' element={<ItemListContainer />} />

              <Route path='/:catId' element={<ItemListContainer />} />

              <Route path="/:catId/:itemId" element={<ItemDetailContainer />} />

              <Route path="/cart" element={<CartDetailContainer/>} />

              <Route path="/PruebaFirebase" element={<PruebaFirebase/>} />
              <Route path="/ItemsFirebase" element={<ItemsFirebase/>} />

            </Routes>           

          </div>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App

