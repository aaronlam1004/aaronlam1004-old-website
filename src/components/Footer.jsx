import React from 'react';

import "./Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.sprite = require("../imgs/sonic.gif").default;
        this.messages = ["California", "Irvine", "Long Beach"];
        this.state = {
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

        sprite.style.animation = "none";
        message.style.animation = "none";
        copyright.style.animation = "none";

        setTimeout(function() {
            sprite.style.animation = "";
            message.style.animation = "";
            copyright.style.animation = "";
        }, 20);
        
    }

    render() {
        return(
            <footer id="sprite-footer">
                <img id="sprite" src={this.sprite} alt="Sonic" ></img>
                <span id="message" onMouseEnter={this.restartAnimation}>Made with <span role = "img" aria-label = "lightning">⚡</span> from <b>{this.state.message}</b></span>
                <span id="copyright"> © Sonic the Hedeghog</span>
            </footer>
        );
    }
}

export default Footer;
