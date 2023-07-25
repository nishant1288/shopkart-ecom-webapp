import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DataProvider from "./Context/DataProvider";

import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import ProductDetail from './Components/productDetails/ProductDetail';
import Cart from './Components/cart/Cart';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element= {<Cart /> } />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
