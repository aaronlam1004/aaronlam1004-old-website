import React from 'react';
import globals from './globals';
import PortfolioItem from './PortfolioItem';
import './BodySection.css';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: globals.mode
        }
        this.checkState = this.checkState.bind(this);
        this.portfolio = new Array(3);
    }

    componentDidMount() {
        document.getElementById("theme-toggle").addEventListener("click", this.checkState);
    }

    checkState() {
        this.portfolio = new Array(3);
        this.setState(prevState => ({
            mode: (globals.mode === 0) ? 1 : 0
        }));
    }

    render() {
        this.portfolio[0] = <PortfolioItem
                                key="port-0"
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
                                theme={this.state.mode}
                            />
        this.portfolio[1] = <PortfolioItem
                                key="port-1"
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
                                theme={this.state.mode}
                            />
        this.portfolio[2] = <PortfolioItem
                                key="port-2"
                                title="Checkers"
                                href="https://github.com/aaronlam1004/checkers"
                                src={require("../imgs/portfolio/checkers.PNG").default}
                                desc="PyGame implementation of the game Checkers/Draughts. Lots of player customization. Can play with others in local multiplayer or online multiplayer (which uses multithreading)."
                                imgw="400px"
                                imgh="300px"
                                descx="165px"
                                descy="-250px"
                                borderx="-5px"
                                bordery="-550px"
                                theme={this.state.mode}
                            />
        return(
            <div className="sectionBody">
                <h1 id="portfolio">Portfolio</h1>
                {this.portfolio}
            </div>
        )
    }
}

export default Portfolio;
