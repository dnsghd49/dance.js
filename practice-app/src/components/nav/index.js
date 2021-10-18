import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navC">
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faAppleAlt} /></Link>
                        <li className="nav-item active">
                            <Link className="nav-link" to="">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Mac</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">iPad</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">iPhone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Watch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">TV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><FontAwesomeIcon icon={faSearch} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;
