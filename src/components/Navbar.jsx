import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <ul id="navbar">
            <li onClick={()=> {
                document.getElementById("about").scrollIntoView({
                    behavior: "smooth"
                });
            }}>About</li>
            <li onClick={()=> {
                document.getElementById("experience").scrollIntoView({
                    behavior: "smooth"
                });
            }}>Portfolio</li>
            <li className="icolink">
                <a href="https://www.linkedin.com/in/aaron-t-lam/">
                    <img src={require("../imgs/linkedin.png").default} title="LinkedIn"></img>
                </a>
                <div className="border"></div>
            </li>
            <li className="icolink">
                <a href="https://github.com/aaronlam1004">
                    <img src={require("../imgs/github.png").default} title="GitHub"></img>
                </a>
                <div className="border"></div>
            </li>
        </ul>
    )
}

export default Navbar;