import logo from './logo.svg';
import './App.css';

import { Fragment } from 'react';
import RoutesMain from "./Routes";
import CartProvider from "./Store/AuthProvider";
function App() {
  return (
    <CartProvider>
      <RoutesMain />
    </CartProvider>
  );
}

export default App;
