import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                let productos = (id) ? Products.filter(producto => producto.categoria === id) : Products;
                resolve((productos.length > 0) ? productos : Products);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <div className="container">
                <ItemList items={items} />
            </div>
            <Footer />    
        </div>
    )
}

export default ItemListContainer;