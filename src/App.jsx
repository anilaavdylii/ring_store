import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import {Routes, Route} from 'react-router-dom';
import Detail from "./Detail";
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';

export default function App() {
 
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:category" element={<Products/>} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
