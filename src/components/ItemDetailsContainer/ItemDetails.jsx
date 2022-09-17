import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../Context/Context";

const ItemDetails = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    /* const [prod, setProd] = useState(item);
    console.log(prod); */
    const onAdd = (item, counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center color_marron">
                <img src={"../images/" + item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <h3>{item.destacado}</h3>
                <p><b>${item.precio}</b></p>
                <p>{item.descripcion}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item} />
            </div>
        </div>
    )
}

export default ItemDetails;