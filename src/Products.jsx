import React, {useState} from "react";
import Spinner from './Spinner';
import useFetch from "./services/useFetch";
import {useParams} from "react-router-dom"
import PageNotFound from "./PageNotFound";
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Products() {
  
  const [size, setSize] = useState("");
  const {category} = useParams();
  const {data: products, loading, error} = useFetch("products?category=" + category);
  

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${p.category}/${p.id}`}>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/images/${p.image}`} alt={p.name}  />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>
            ${p.price}
            </Card.Text>
          </Card.Body>
        </Card>

        </Link>
      </div>
    );
  }

  const filteredProducts = size ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size))) : products;

  if(error) throw error;

  if(loading) return <Spinner/>

  if(products.length === 0) return <PageNotFound/>

  return (
    <>
        { category === "rings" &&
              <section id="filters">
              <label htmlFor="size">Filter by Size:</label>{" "}
              <select id="size" value={size} onChange={(e) => {debugger; setSize(e.target.value)}}>
                <option value="">All sizes</option>
                <option value="4.0">4.0</option>
                <option value="4.5">4.5</option>
                <option value="5.0">5.0</option>
                <option value="5.5">5.5</option>
                <option value="6.0">6.0</option>
                <option value="6.5">6.5</option>
                <option value="7.0">7.0</option>
                <option value="7.5">7.5</option>
              </select>
              { size && <h2>Found: {filteredProducts.length} items</h2>}
            </section>    }
          <CardGroup id="products">{filteredProducts.map(renderProduct)} </CardGroup>
    </>
  );
}
