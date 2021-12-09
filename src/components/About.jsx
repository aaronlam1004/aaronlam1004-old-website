import React from 'react';
import globals from './globals';
import CodeTitle from './CodeTitle.jsx';
import './BodySection.css';

function About() {
    var titleStyle = {}
    if (globals.mode) {
        titleStyle["WebkitTextFillColor"] = "#FFFFFF";
    }
    // <img id="title-img" alt="Me" src={require("../imgs/me.JPG").default}></img>
    return(
        <div className="sectionBody">
            <h1 id="title" style={titleStyle}>Aaron Lam</h1><br/><br/>
            <CodeTitle/><br/><br/>
            Hello. I am a Computer Science student from <b>University of California, Irvine</b> and this is my website. <br/><br/>
            <b><u>Some things that I am interested in (in no particular order) are:</u></b>
            <ul>
                <li>Game Development</li>
                <li>UI/UX Design</li>
                <li>Computer Graphics</li>
                <li>Computer Vision</li>
                <li>Machine Learning</li>
                <li>Video Editing and Special Effects</li>
            </ul>
        </div>
    )
}

export default About;
