import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navC">
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;
