import React from "react";
import "../style.css";
import { Digit } from "./Digit";



class Display extends React.Component {
  constructor() {
    super();
    const now = new Date();
    this.state = {
      h: String(now.getHours()).padStart(2, "0"),
      m: String(now.getMinutes()).padStart(2, "0"),
      s: String(now.getSeconds()).padStart(2, "0"),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const now = new Date();
      this.setState({
        h: String(now.getHours()).padStart(2, "0"),
        m: String(now.getMinutes()).padStart(2, "0"),
        s: String(now.getSeconds()).padStart(2, "0"),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
   
  }

  render() {
    const { h, m, s } = this.state;

    return (
      <div className="clock">
        <Digit number={+h[0]} />
        <Digit number={+h[1]} />

        <div className="colon">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <Digit number={+m[0]} />
        <Digit number={+m[1]} />

        <div className="colon">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <Digit number={+s[0]} />
        <Digit number={+s[1]} />
      </div>
    );
  }
}

export default Display;
