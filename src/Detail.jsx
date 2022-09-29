import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import {useCart} from "./cartContext";

export default function Detail() {
  const {dispatch} = useCart();
  const {id} = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const {data:product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner/>
  if (!product) return <PageNotFound/>
  if (error) throw error;


  
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>

      {product.category === "rings" &&
          <select id="size" value={sku} onChange={(e) => {setSku(e.target.value)}}>
                  <option value="">Choose your size:</option>
                  return {product.skus.map((s)=>(
                    <option key={s.sku} value={s.sku}>{s.size}</option>
                  ))}
          </select>
      }
     
      <p>
        <button  className="btn btn-primary" onClick={()=> {
                                                              dispatch({type:"add", id, sku});
                                                              navigate("/cart");
                                                              }}>
                                                                Add to Cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
