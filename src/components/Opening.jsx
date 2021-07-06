import React from "react";
// import {Link} from "react-router-dom";
import "./Opening.css"; 

export default class Opening extends React.Component {
    componentWillMount() {
        document.body.onanimationend = function(event) {
            if (event.animationName === "background-change") {
                document.getElementById("opening").style.backgroundColor = "#CFE6E5";
            }
            if (event.animationName === "appear") {
                document.getElementById("heading").style.color = "white";
            }
        }
    }

    render() {
        var circles = [];
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        console.log(windowWidth, windowHeight);
        const start = 0;
        var interval = 2;
        var prevTime = start;
        for (var i = 0; i < 10; i++) {
            var delay = prevTime;
            var x = Math.floor(Math.random() * (windowWidth * 0.50));
            var y = Math.floor(Math.random() * (windowHeight * 0.50));
            var styles = {
                top: y + "px",
                right: x + "px",
                animationDelay: delay + "s"
            }

            if (i >= 3) {
                delay = prevTime + 1;
                styles["width"] = "250px";
                styles["height"] = "250px";
                styles["animationDelay"] = delay + "s";
                styles["animationDuration"] = "1s";
                prevTime = delay;
            }
            else if (i === 2) {
                prevTime = delay;
            }
            else {
                prevTime = delay + interval;
            }

            circles.push(
                <span
                    key = {i}
                    className = "circle"
                    style = {styles}
                >
                </span>
            );
        }

        return(
            <div id = "opening">
                <h1 id="heading">Aaron Lam</h1>
                {circles}
            </div>
        );
    }
}

