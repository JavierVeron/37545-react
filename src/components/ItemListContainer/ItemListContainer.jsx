import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
//import Products from "../Products/Products";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Burger-King");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [id]);

    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}  
            </div>
            <Footer />    
        </div>
    )
}

export default ItemListContainer;