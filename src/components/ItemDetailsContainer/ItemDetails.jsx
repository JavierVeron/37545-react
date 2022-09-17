import React, { useContext } from "react";
import {CartContext} from "../Context/Context";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (counter) => {//En el Desafío de Eventos había que crear esta función donde solamente iba a recibir la cantidad de Items. No hace falta pasar por parámetro el Item, porque ya está ese valor en este Componente!
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
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetails;