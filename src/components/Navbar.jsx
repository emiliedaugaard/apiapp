import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/nyheder">Nyheder</NavLink>
                </li>
                <li>
                    <NavLink to="/opretnyhed">Opret nyhed</NavLink>
                </li>
                <li>
                    <NavLink to="/produkter">Produkter</NavLink>
                </li>
                <li>
                    <NavLink to="/opretprodukter">Opret produkter</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
