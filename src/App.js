import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Compontents/MainLayout/MainLayout';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Cart from './Pages/Card/Cart';
import Sign from './Pages/Sign/Sign';
import ShopCategory from './Pages/shopCatergory/shopCategory';
import Men_Bnner from './Compontents/Assets/banner_mens.png'
import Women_Bnner from './Compontents/Assets/banner_women.png'
import Kids_Bnner from './Compontents/Assets/banner_kids.png'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Shop />} />
          <Route path='Men' element={<ShopCategory banner={Men_Bnner} category="men" />} />
          <Route path='Women' element={<ShopCategory banner={Women_Bnner} category="women" />} />
          <Route path='Kids' element={<ShopCategory banner={Kids_Bnner} category="kid" />} />
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="Cart" element={<Cart />} />
          <Route path="Sign" element={<Sign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
