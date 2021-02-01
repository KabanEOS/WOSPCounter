import './counter.css';
import React, { Component } from "react";
import { useState } from "react";
import CountUp from 'react-countup';
import headTitle from "./img/wygrywamy.png";
import dwa from "./img/29.png";
import pulse from "./img/pulse1.png";
import { globalVal } from "./globalVal"
import Slider from "react-slick";


const counter = () => {


    const newVal =12677;
    const oldVal = 344;
    globalVal.value[0].val=newVal;
    
    // const[val, valSetter] = useState(newVal);

    console.log('val')
    //   const callback = (val) => {
    //     console.log(val);
    //   };
    
    return (
        <div className="wrapper">
            <div className="dwa">
                <img src={dwa} alt="dwiasca" />;
            </div>
            <div className="title">
                <img src={headTitle} alt="headTitle" />;
            </div>
            <div className="pulse">
                <img src={pulse} alt="pulse" />;
            </div>

            <div className="hajsCounter">
                <CountUp start={oldVal} end={newVal} delay={0} className="countUp">
                    {({ countUpRef }) => (
                        <div className="countUp">
                            <span className="countUpUp" ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            </div>

            <div className="downContainer">
                <div className="slider">
                    slider kuuuuuurła
                </div>
            </div>

        </div>
    )
}

export default counter
