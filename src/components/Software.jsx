import React from 'react';
import SkillItem from './SkillItem';

function Software() {
    var styles = {
        top: "2px",
        right: "-175px"
    }
    return (
        <div className="lists">
            <ul aria-label="Software:" style={styles}>
            <SkillItem 
                name="Jupyter" 
                src={require("../imgs/software/jupyter.png").default} 
                deg="30"/>
            <SkillItem 
                name="Git" 
                src={require("../imgs/software/git.png").default} 
                deg="30"/>
            <SkillItem 
                name="VirtualBox" 
                src={require("../imgs/software/virtualbox.png").default} 
                deg="240"/>
            <SkillItem 
                name="Vim" 
                src={require("../imgs/software/vim.png").default} 
                deg="100"/>
            <SkillItem 
                name="PuTTy" 
                src={require("../imgs/software/putty.png").default} 
                color="yes"/>
            <SkillItem 
                name="Unity" 
                src={require("../imgs/software/unity.png").default} 
                deg="0"/>
            <SkillItem 
                name="Figma" 
                src={require("../imgs/software/figma.png").default} 
                color="yes"/>
            <SkillItem 
                name="ConEmu/Cmder" 
                src={require("../imgs/software/conemu.png").default} 
                color="yes"/>
            </ul>
        </div>
    )
}
export default Software;