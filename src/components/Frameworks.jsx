import React from 'react';
import SkillItem from './SkillItem';

function Frameworks() {
    return (
        <div className="lists">
            <ul aria-label="Frameworks:">
            <SkillItem 
                name="NumPy" 
                src={require("../imgs/frameworks/numpy.png").default} 
                deg="220"/>
            <SkillItem 
                name="React" 
                src={require("../imgs/frameworks/react.png").default} 
                deg="240"/>
            <SkillItem 
                name="SocketIO" 
                src={require("../imgs/frameworks/socketio.png").default} 
                deg="60"/>
            <SkillItem 
                name="PyGame" 
                src={require("../imgs/frameworks/pygame.png").default} 
                color="yes"/>
            <SkillItem 
                name="Flask" 
                src={require("../imgs/frameworks/flask.png").default} 
                deg="100"/>
            <SkillItem 
                name="MongoDB" 
                src={require("../imgs/frameworks/mongodb.png").default} 
                deg="100"/>
            <SkillItem 
                name="Heroku" 
                src={require("../imgs/frameworks/heroku.png").default} 
                deg="255"/>
            <SkillItem 
                name="OpenCV" 
                src={require("../imgs/frameworks/opencv.png").default} 
                color="yes"/>
            </ul>
        </div>
    )
}
export default Frameworks;
