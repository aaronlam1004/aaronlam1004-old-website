import React from 'react';
import './Background.css';

class Background extends React.Component {
    constructor() {
        super();
        this.balls = []
        this.state = {
            width: 0,
            height: 0
        }
        this.getParameters = this.getParameters.bind(this);
    }
    componentDidMount() {
        window.addEventListener("load", this.getParameters);
    }

    getParameters() {
        this.setState(prevState => ({
            width: window.innerWidth - 200,
            height: document.body.clientHeight
        }));
        // console.log(this.state.width, this.state.height);
    }

    render() {
        if (this.state.height > 0) {
            var ani = `
            @keyframes down {
                100% {
                    transform: translateY(${this.state.height + 150}px);
                }
            }
            `;
            for (var i=0; i<20; i++) {
                var pos = {
                    left: `${Math.random() * (this.state.width - 100) + 100}px`,
                    top: "-100px",
                    animation: "down 20s infinite",
                    animationDelay: `${i}s`
                }
                this.balls.push(<div className="ball" key={i} style={pos}></div>);
            }
            return (
                <div>
                    <style children={ani}/>
                    {this.balls}
                </div>
            );
        }
        else {
            console.log("Rendering nothing!!");
            return (<div></div>);
        }
    }
}

export default Background;
