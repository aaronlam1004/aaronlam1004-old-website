import React from 'react';
import './CodeTitle.css'

class CodeTitle extends React.Component {

    constructor(props) {
        super(props);

        this.headings = [
            "console.log(\"Hello, World!\"); ",
            "System.out.println(\"Hello, World!\"); ",
            "print(\"Hello, World!\") ",
            "cout << \"Hello, World!\" << endl; ",
            "echo \"Hello, World!\" ",
            "Console.Writeline(\"Hello, World!\"); ",
            "printf(\"Hello, World!\"); "
        ];

        const chosenHeading = this.headings[Math.floor(Math.random() * this.headings.length)];
        const indexprefix = chosenHeading.indexOf("\"");
        const indexEnd = chosenHeading.indexOf("!") + 1;

        this.state = {
            currHeading: chosenHeading,
            stringRange: [indexprefix, indexEnd],
            typed: "",
            prefix: "" ,
            string: "" ,
            end: ""
        };

    }

    componentDidMount() {
        this.writeCode();
    }

    writeCode() {
        if (this.state.typed.length !== this.state.currHeading.length) {
            if (this.state.typed.length < this.state.stringRange[0]) {
                this.setState({
                    typed: this.state.typed.concat(this.state.currHeading[this.state.typed.length]),
                    prefix: this.state.prefix.concat(this.state.currHeading[this.state.typed.length])
                });
            }
            else if (this.state.typed.length > this.state.stringRange[1]) {
                this.setState({
                    typed: this.state.typed.concat(this.state.currHeading[this.state.typed.length]),
                    end: this.state.end.concat(this.state.currHeading[this.state.typed.length])
                })
            }
            else {
                this.setState({
                    typed: this.state.typed.concat(this.state.currHeading[this.state.typed.length]),
                    string: this.state.string.concat(this.state.currHeading[this.state.typed.length])
                });
            }
            setTimeout(() => this.writeCode(), 150);
        } else {
            this.resetCode();
        }
    }

    resetCode() {
        if (this.state.typed.length !== 0) {
            if (this.state.typed.length < this.state.stringRange[0]) {
                this.setState({
                    typed: this.state.typed.slice(0, this.state.typed.length - 1),
                    prefix: this.state.prefix.slice(0, this.state.typed.length - 1)
                });
            }
            else if (this.state.typed.length > this.state.stringRange[1]) {
                this.setState({
                    typed: this.state.typed.slice(0, this.state.typed.length - 1),
                    end: this.state.end.slice(0, this.state.end.length - 1)
                });
            }
            else {
                this.setState({
                    typed: this.state.typed.slice(0, this.state.typed.length - 1),
                    string: this.state.string.slice(0, this.state.string.length - 1)
                });
            }
            setTimeout(() => this.resetCode(), 150);
        } 
        else {
            const newHeading = this.headings[Math.floor(Math.random() * this.headings.length)];
            const indexprefix = newHeading.indexOf("\"");
            const indexEnd = newHeading.indexOf("!") + 1;

            this.setState({
                currHeading: newHeading,
                stringRange: [indexprefix, indexEnd]
            });

            this.writeCode();
        }
    }

    render() {
        return (
            <code className = "codeTitle">
                <span>{this.state.prefix}</span>
                <span style = {{color: "green", fontWeight: "bold"}}>{this.state.string}</span>
                <span>{this.state.end}</span>
            </code>
        )
    }
}

export default CodeTitle;
