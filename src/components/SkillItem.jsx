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
        if (this.props.color !== undefined && this.props.theme === 0) {
            color.filter = "grayscale(100%) brightness(20%)";
        }
        else if (this.props.color !== undefined && this.props.theme === 1) {
            color.filter = "grayscale(100%) brightness(120%)";
        }
        else if (this.props.theme === 1) {
            color.filter = "invert(1)";
        }

        if (this.state.hovered) {
            if (this.props.color !== undefined ) {
                color.filter = "grayscale(0%)";
            }
            else {
                color.filter = `invert(1) sepia(1) brightness(0.6) saturate(3000%) hue-rotate(${-70 + parseInt(this.props.deg)}deg)`;
            }
        }

        return(
            <li className="skill-item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <img alt={this.props.name} src={this.props.src} style={color}>
                </img> <span>{this.props.name}</span>
            </li>
        );
    }
}

export default SkillItem;
