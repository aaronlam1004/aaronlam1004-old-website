import React from 'react';
import SkillItem from './SkillItem';

function ProgrammingLanguages() {
    return (
        <div className="lists">
            <ul aria-label="Programming Languages:">
            <SkillItem 
                name="Python" 
                src={require("../imgs/programming/python.png").default} 
                deg="100"/>
            <SkillItem 
                name="C++" 
                src={require("../imgs/programming/c++.png").default} 
                deg="240"/>
            <SkillItem 
                name="C" 
                src={require("../imgs/programming/c.png").default} 
                deg="240"/>
            <SkillItem 
                name="C#" 
                src={require("../imgs/programming/csharp.png").default} 
                deg="270"/>
            <SkillItem 
                name="HTML" 
                src={require("../imgs/programming/html.png").default} 
                deg="30"/>
            <SkillItem 
                name="JavaScript/JSX" 
                src={require("../imgs/programming/js.png").default} 
                deg="70"/>
            <SkillItem 
                name="Unix/Bash" 
                src={require("../imgs/programming/bash.png").default} 
                deg="120"/>
            </ul>
        </div>
    )
}
export default ProgrammingLanguages;
