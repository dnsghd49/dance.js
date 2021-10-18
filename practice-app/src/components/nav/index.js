import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <Router>
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
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Router>
    );
}

export default Navbar;
