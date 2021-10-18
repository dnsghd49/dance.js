import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function FooterTwo() {
    return (
        <div className="containerTwo">
            <div className="stuffTwo">
                <ul>
                    <li><strong>Copyright © 2021</strong></li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>TV</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterTwo;
