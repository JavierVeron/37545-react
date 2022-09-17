import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Burger-King-Logo-CMS.png";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="48" alt="Burguer King" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/combo"}>Pedí tu Combo Favorito</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Menú</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;