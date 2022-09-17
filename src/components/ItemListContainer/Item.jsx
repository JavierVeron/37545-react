import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card fondo_amarillo border-0">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <img src={"images/" + item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title text-center color_marron"><b>{item.nombre}</b></h5>
                </div>
            </Link>
        </div>
    )
}

export default Item;