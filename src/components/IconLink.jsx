import React from 'react';
import './IconLink.css';

const placeholder = require("../imgs/placeholder.jpg");

function IconLink(props) {
    var styles;
    if (props.size === undefined) {
        styles = {"width": "50px", "height": "50px"};
    }
    else {
        styles = {"width": `${props.size}px`, "height": `${props.size}px`};
    }
    return (
        <div>
            <a href = {props.link} target = "_blank" rel = "noopener noreferrer"><img style = {styles} className = "logoImage" src = {props.image} alt = {placeholder}></img></a>
        </div>
    );
}

export default IconLink;
