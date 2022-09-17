import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/Context";
import carrito from "../images/basket.svg";
import cesto from "../images/trash3.svg";

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext); //Importé las funciones carTotal y Clear.
    //Notese que estoy poniendo la función sin () => {}, porque quiero que se ejecute todo el tiempo.
    //En cambio, en el botón Vaciar Carrito. Si estoy estoy poniendo la función () => {clear()}. Porque solamente se disparará esa función cuando haga click sobre el botón.

    return (
        <div>
            <button type="button" className="btn fondo_naranja position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={cesto} alt="Cesto" />
            </button>
            <Link to={"/cart"}>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={carrito} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;