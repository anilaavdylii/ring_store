import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import {getProducts} from "./services/productService"
import Spinner from './Spinner';


export default function App() {
  
  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (()=>{
    getProducts("ring")
    .then((response)=> 
    setProducts(response))
    .catch((e)=> setError(e))
    .finally(()=> setLoading(false));
  },[]);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size))) : products;

  if(error) throw error;

  if(loading) return <Spinner/>

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e) => {debugger; setSize(e.target.value)}}>
              <option value="">All sizes</option>
              <option value="5.0">5.0</option>
              <option value="5.5">5.5</option>
              <option value="6.0">6.0</option>
              <option value="6.5">6.5</option>
              <option value="7.0">7.6</option>
              <option value="7.5">7.5</option>
            </select>
            { size && <h2>Found: {filteredProducts.length} items</h2>}
          </section>
          <section id="products">{filteredProducts.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
