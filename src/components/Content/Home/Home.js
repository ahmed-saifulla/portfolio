import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import { Animated } from "react-animated-css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="wrap">

                    <Animated animationIn="headShake" animationInDelay={500} animationOut="fadeOut" isVisible={true}>
                        <h3 >Hi chum,</h3>
                    </Animated>

                    <Animated animationIn="headShake" animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
                        <h1>Nice to meet you.</h1>
                    </Animated>

                    <Animated animationIn="headShake" animationInDelay={1500} animationOut="fadeOut" isVisible={true}>
                        <h4 >More about me</h4>
                    </Animated>

                </div>
            </div>
        );
    }
}

export default Home;
