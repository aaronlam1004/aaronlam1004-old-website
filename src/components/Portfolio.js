import React from 'react';

import './BodySection.css';

function Portfolio() {
    return(
        <div>
            <p className = "sectionTitle">About Me</p>
            <p className = "sectionBody">Hello. My name is Aaron Lam. I am a 3rd year student at UC Irvine studying Computer Science.</p>

            <p className = "sectionTitle">Education</p>
            <b className = "sectionBody">Programming Languages</b>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>C++</li>
            </ul>
            <b className = "sectionBody">Frameworks</b><br/>
            <ul>
                <li>Jupyter</li>
                <li>OpenCV</li>
                <li>NumPy</li>
                <li>NodeJS</li>
                <li>React</li>
                <li>MongoDB</li>
            </ul>
            <b className = "sectionBody">Software</b><br/>
            <ul>
                <li>Vim</li>
                <li>Unix/Linux</li>
                <li>VirtualBox</li>
                <li>VMWare</li>
            </ul>
            <b className = "sectionBody">Coursework</b>
            <ul>
                <li>Digital Image Processing</li>
                <li>Introduction to Artificial Intelligence</li>
                <li>Data Mining and Machine Learning</li>
                <li>Data Structure Implmentation and Algorithms</li>
                <li>Intro to Software Engineering</li>
            </ul>

            <p className = "sectionTitle">Experience</p>
            <ul>
            </ul>

            <p className = "sectionTitle">Currently Working On</p>
            <ul>
                <li>This website</li>
                <li>(Light) Novel Reader Web App</li>
                <li>TFT Discord Bot</li>
                <li>ICSSC Discord Bot</li>
                <li>Vagr</li>
            </ul>
        </div>
    )
}

export default Portfolio;
