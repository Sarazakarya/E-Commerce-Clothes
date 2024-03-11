import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import ShopContextProvider from './Context/ShopContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ShopContextProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ShopContextProvider>
  </>
);

reportWebVitals();
