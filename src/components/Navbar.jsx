import React from 'react';
import globals from "./globals";
import './Navbar.css';

import pdf from '../files/Aaron Lam Resume.pdf'

function Navbar() {
    var icon_styles = {}
    var themeSwitcher = <input id="theme-switcher" type="checkbox"/>;

    if (globals.mode) {
        icon_styles["filter"] = "invert(1)";
        document.body.style.backgroundColor = "#0F0F0F";
        document.body.style.color = "#FFFFFF";
        themeSwitcher = <input id="theme-switcher" type="checkbox" checked readOnly/>;
    }

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
                        <img src={require("../imgs/icons/linkedin.png").default} 
                             alt="LinkedIn" 
                             title="LinkedIn"
                             style={icon_styles}>
                        </img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href="https://github.com/aaronlam1004" target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/github.png").default} 
                             alt="GitHub" 
                             title="GitHub"
                             style={icon_styles}>
                        </img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href={pdf} target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/resume.png").default} 
                             alt="Resume" 
                             title="Resume"
                             style={icon_styles}>
                        </img>
                    </a>
                    <div className="border"></div>
                </li>

                <li className="icolink">
                    <a href="mailto: aaronlam1004@gmail.com" target="_blank" rel="noreferrer">
                        <img src={require("../imgs/icons/email.png").default} 
                             alt="Email" 
                             title="Email"
                             style={icon_styles}>
                        </img>
                    </a>
                    <div className="border"></div>
                </li>
            </div>


            {themeSwitcher}
            <span id="theme-toggle" onClick={(event) => {
                event.target.previousSibling.checked = !event.target.previousSibling.checked;
                document.body.style.transition = "all 0.3s ease";
                var icons;
                var i;
                if (!globals.mode) {
                    document.getElementById("title").style.webkitTextFillColor = "#FFFFFF";
                    document.body.style.backgroundColor = "#0F0F0F";
                    document.body.style.color = "#FFFFFF";
                    // document.getElementById("navbar").style.color = "#FFFFFF";

                    icons = document.getElementsByClassName("icolink");
                    for (i=0; i<icons.length; i++) {
                        icons[i].children[0].children[0].style.filter = "invert(1)";
                    }

                    globals.mode = 1;
                }
                else {
                    document.getElementById("title").style.webkitTextFillColor = "#000000";
                    document.body.style.backgroundColor = "#FFFFFF";
                    document.body.style.color = "#000000";

                    icons = document.getElementsByClassName("icolink");
                    for (i=0; i<icons.length; i++) {
                        icons[i].children[0].children[0].style.filter = "";
                    }
                    
                    globals.mode = 0;
                }
            }}>
                ☼ &nbsp; &nbsp; ☽
            </span>
        </ul>
    )
}

export default Navbar;
