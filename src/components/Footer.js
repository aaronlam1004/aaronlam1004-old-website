import React from 'react';
import IconLink from './IconLink.js';

import "./Footer.css";

const sonic = require("../imgs/sonic.gif");

const linkedin = require("../imgs/linkedin.png");
const github = require("../imgs/github.png");
const placeholder = require("../imgs/placeholder.jpg");

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.sprites = ["sonic"];
        this.messages = ["California", "Irvine", "Long Beach"];
        this.state = {
            sprite: `../imgs/${this.sprites[Math.floor(Math.random() * this.sprites.length)]}.gif`,
            message: this.messages[Math.floor(Math.random() * this.messages.length)]
        }

        this.restartAnimation = this.restartAnimation.bind(this);
    }

    restartAnimation() {
        this.setState({
            message: this.messages[Math.floor(Math.random() * this.messages.length)]
        });

        const sprite = document.getElementById("sprite");
        const message = document.getElementById("message");
        const copyright = document.getElementById("copyright");
        
        sprite.style.visibility = "visible";

        sprite.style.webkitAnimation = "none";
        message.style.webkitAnimation = "none";
        copyright.style.webkitAnimation = "none";

        setTimeout(function() {
            sprite.style.webkitAnimation = "";
            message.style.webkitAnimation = "";
            copyright.style.webkitAnimation = "";
        }, 10);
        
    }

    render() {
        return(
            <div>
                <div id = "icons">
                    <ul>
                        <li><IconLink link = "https://www.linkedin.com/in/aaron-lam-93805b163/" image = {linkedin} size = "25" /></li>
                        <li><IconLink link = "https://github.com/aaronlam1004" image = {github} size = "25" /></li>
                    </ul>
                </div>
                <footer id = "sprite-footer">
                    <img id = "sprite" src = {sonic} alt = {placeholder}></img>
                    <span id = "message" onMouseEnter = {this.restartAnimation}>Made with <span role = "img" aria-label = "lightning">⚡</span> from <b>{this.state.message}</b></span>
                    <span id = "copyright"> © Sonic the Hedeghog</span>
                </footer>
            </div>
        );
    }
}

export default Footer;
