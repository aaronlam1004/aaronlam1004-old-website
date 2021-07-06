import React from 'react';
import IconLink from './IconLink.js';
import CodeTitle from './CodeTitle.js';

import './Header.css';

const github = require("../imgs/github.png");
const linkedin = require("../imgs/linkedin.png");

function Header(props) {
    return (
        <div className = "header">
            <h1>Aaron Lam</h1>
            <CodeTitle />
            <ul>
                <li><IconLink link = "https://www.linkedin.com/in/aaron-lam-93805b163/" image = {linkedin}/></li>
                <li><IconLink link = "https://github.com/aaronlam1004" image = {github}/></li>
            </ul>
        </div>
    );
}

export default Header;
