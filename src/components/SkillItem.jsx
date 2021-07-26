import React from 'react';
import './SkillItem.css';

class SkillItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hovered: false
        }

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({
            hovered: !prevState.hovered
        }));
    }


    render() {
        var color = {}

        if (this.state.hovered) {
            color.filter = `invert(1) sepia(1) brightness(0.6) saturate(3000%) hue-rotate(${-70 + parseInt(this.props.deg)}deg)`;
        }

        if (this.props.color !== undefined) {
            color.filter = "grayscale(0%)";
        }
        
        if (this.state.hovered) {
            return(
                <li className="skill-item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <img alt={this.props.name} src={this.props.src} style={color}>
                    </img> <span>{this.props.name}</span>
                </li>
            );
        }
        else {
            return(
                <li className="skill-item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <img alt={this.props.name} src={this.props.src}>
                    </img> <span>{this.props.name}</span>
                </li>
            );
        }
    }
}

export default SkillItem;