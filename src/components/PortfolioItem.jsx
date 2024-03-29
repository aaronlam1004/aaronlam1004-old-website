import React from 'react';
import './PortfolioItem.css';

class PortfolioItem extends React.Component {
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
        var ani = `
        @keyframes expand-highlight {
            0% {
                width: 0px;
                height: 0px;
            }
            100% {
                width: 510px;
                height: 310px;
            }
        }
        `
        var portfolioStyle = {}
        if (this.props.theme) {
            portfolioStyle["backgroundColor"] = "#1A1A1A";
        }

        var pos = {
            top: this.props.descy,
            left: this.props.descx,
        };

        var iprop = {
            width: this.props.imgw,
            height: this.props.imgh
        };

        var styles = {
            top: this.props.bordery,
            left: this.props.borderx
        }

        if (this.state.hovered) {
            styles.animationName = "expand-highlight";
            styles.animationDuration = "0.5s";
        }
        
        return (
            <div className="portfolio-item" style={portfolioStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <style children={ani}/>
                <h2>{this.props.title}</h2>
                <a href={this.props.href} target="_blank" rel="noreferrer">
                    <img style={iprop} alt={this.props.title} src={this.props.src}></img>
                    <span style={pos}>{this.props.desc}</span>
                </a>
                <div className="border" style={styles}></div>
            </div>
        );
    }
}

export default PortfolioItem;
