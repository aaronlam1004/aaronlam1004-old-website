import React from 'react';
import './Background.css';

class Background extends React.Component {
    constructor() {
        super();
        this.balls = []
    }

    render() { 
        var width = window.innerWidth - 200;
        for (var i=0; i<20; i++) {
            var pos = {
                left: `${Math.random() * (width - 100) + 100}px`,
                top: "-100px",
                animationDelay: `${i}s`
            }
            this.balls.push(<div className="ball" key={i} style={pos}></div>);
        }
        return (
            <div>
                {this.balls}
            </div>
        );
    }
}

export default Background;