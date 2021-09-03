import React from 'react';
import globals from './globals';
import CodeTitle from './CodeTitle.jsx';
import './BodySection.css';

function About() {
    var titleStyle = {}
    if (globals.mode) {
        titleStyle["WebkitTextFillColor"] = "#FFFFFF";
    }
    return(
        <div className="sectionBody">
            <h1 id="title" style={titleStyle}>Aaron Lam</h1>
            <CodeTitle/>
            <h1>About</h1>
            Hello. I am a Computer Science student from <b>University of California, Irvine</b> and this is my website. I am interested in a lot of things.
        </div>
    )
}

export default About;
