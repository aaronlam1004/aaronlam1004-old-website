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
                x="0px"
                y="0px"
                borderx="-5px"
                bordery="-302px"
            />
            <PortfolioItem
                title="VR Aliens"
                href="https://www.youtube.com/watch?v=nDEe1d46kAY&list=PLYPlBKK12vcbsQKN0endzeu6f4Zjm_izG&index=1"
                src={require("../imgs/portfolio/vr.png").default}
                desc="Virtual Reality game created for a class. Setting is a city area with a park. Player
                can walk around area and shoot aliens as well as interact with alien devices. Uses the VR Simulator."
                x="170px"
                y="-195px"
                borderx="-5px"
                bordery="-450px"
            />

            <PortfolioItem
                title="Checkers"
                href="https://github.com/aaronlam1004/checkers"
                src={require("../imgs/portfolio/checkers.PNG").default}
                desc="PyGame implementation of the game Checkers/Draughts. Working local multiplayer and online multiplayer."
                x="165px"
                y="-170px"
                borderx="-5px"
                bordery="-408px"
            />
            
        </div>
    )
}

export default Portfolio;
