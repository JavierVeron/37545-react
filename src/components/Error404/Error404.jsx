import React from "react";
import { Link } from "react-router-dom"
import Logo from "../images/Burger-King-Logo-CMS.png";

const Error404 = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Error 404</h1>
                <p><Link to={"/"}><img src={Logo} alt="BurgerKing" width="180" /></Link></p>
                <h3>La página que estás buscando no existe!</h3>
            </div>
        </div>
    )
}

export default Error404;