import React from 'react';
import PortfolioItem from './PortfolioItem';
import './BodySection.css';

function Portfolio() {
    return(
        <div className="sectionBody">
            <h1 id="portfolio">Portfolio</h1>
            <PortfolioItem
                title="This website"
                href=""
                src={require("../imgs/portfolio/website.PNG").default}
                desc=""
                imgw="420px"
                imgh="200px"
                descx="0px"
                descy="0px"
                borderx="-5px"
                bordery="-302px"
            />
            <PortfolioItem
                title="VR Aliens"
                href="https://www.youtube.com/watch?v=nDEe1d46kAY&list=PLYPlBKK12vcbsQKN0endzeu6f4Zjm_izG&index=1"
                src={require("../imgs/portfolio/vr.png").default}
                desc="Virtual Reality game created for a class. Setting is a city area with a park. Player
                can walk around area and shoot aliens as well as interact with alien devices. Uses the VR Simulator."
                imgw="400px"
                imgh="200px"
                descx="170px"
                descy="-195px"
                borderx="-5px"
                bordery="-450px"
            />
            <PortfolioItem
                title="Checkers"
                href="https://github.com/aaronlam1004/checkers"
                src={require("../imgs/portfolio/checkers.PNG").default}
                desc="PyGame implementation of the game Checkers/Draughts. Working local multiplayer and online multiplayer."
                imgw="400px"
                imgh="300px"
                descx="165px"
                descy="-200px"
                borderx="-5px"
                bordery="-508px"
            />
            
        </div>
    )
}

export default Portfolio;
