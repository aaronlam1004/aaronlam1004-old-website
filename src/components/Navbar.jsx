import React from 'react';
import './Navbar.css';

import pdf from '../files/Aaron Lam Resume 2021.pdf'

function Navbar() {
    return(
        <ul id="navbar">
            <li onClick={()=> {
                document.getElementById("title").scrollIntoView({
                    behavior: "smooth"
                });
            }}>About</li>

            <li onClick={()=> {
                document.getElementById("skills").scrollIntoView({
                    behavior: "smooth"
                });
            }}>Skills</li>

            <li onClick={()=> {
                document.getElementById("experience").scrollIntoView({
                    behavior: "smooth"
                });
            }}>Experience</li>

            <li onClick={()=> {
                document.getElementById("portfolio").scrollIntoView({
                    behavior: "smooth"
                });
            }}>Portfolio</li>

            <div id="icons">
                <li className="icolink">
                    <a href="https://www.linkedin.com/in/aaron-t-lam/" target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/linkedin.png").default} alt="LinkedIn" title="LinkedIn"></img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href="https://github.com/aaronlam1004" target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/github.png").default} alt="GitHub" title="GitHub"></img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href={pdf} target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/resume.png").default} alt="Resume" title="Resume"></img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href="mailto: aaronlam1004@gmail.com" target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/email.png").default} alt="Email" title="Email"></img>
                    </a>
                    <div className="border"></div>
                </li>
            </div>
        </ul>
    )
}

export default Navbar;
