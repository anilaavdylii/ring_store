import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary"
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./cartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
        <ErrorBoundary>
            <BrowserRouter>
               <CartProvider>
                <App />
               </CartProvider>
            </BrowserRouter>
        </ErrorBoundary> , document.getElementById("root"));
