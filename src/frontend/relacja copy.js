import "./relacja.css";
import React, { Component } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import headTitle from "./img/wygrywamy.png";
import dwa from "./img/29.png";
import pulse from "./img/pulse1.png";
import { globalVal } from "./globalVal";
import Confetti from "react-dom-confetti";
import useSound from 'use-sound';
import horn from './horn.mp3';

// import useWindowSize from './use-window-size';

const Relacja = () => {


  // confetti params
  const config = {
    angle: 310,
    spread: 280,
    startVelocity: 60,
    elementCount: 240,
    dragFriction: 0.07,
    duration: "12530",
    stagger: 6,
    width: "50px",
    height: "10px",
    perspective: "1000px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  //confetti ignition 
  const [con, setCon] = useState(false);
  //sound ignition 
  const [play] = useSound(horn);

  const setConOn = () => {
    setCon(true);
    // play[horn];
  };

  const newVal = 12677;
  const oldVal = 344;
  globalVal.value[0].val = newVal;

  // const[val, valSetter] = useState(newVal);

  console.log("val");
  //   const callback = (val) => {
  //     console.log(val);
  //   };

  return (

      <div>
        <Confetti active={con} config={config} />

      <div className="wrapper">
        <div className="dwa">
          <img src={dwa} alt="dwiasca" />;
        </div>
        <div className="title">
          <img src={headTitle} alt="headTitle" />;
        </div>
        <div className="pulse" onClick={play}>
          <img src={pulse} alt="pulse" />;
        </div>

        <div className="relacjaBlock">
          <iframe
            className="iframe"
            //   width="560"
            //   height="315"
            src="https://www.youtube.com/embed/xSrjV26e0e0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="hajsCounter" onClick={setCon}>
          <CountUp start={oldVal} end={newVal} delay={0} className="countUp">
            {({ countUpRef }) => (
              <div className="countUp">
                <span className="countUpUp" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>

        {/* <div className="downContainer">
        <div className="slider">slider kuuuuuurła</div>
      </div> */}
      </div>
    </div>
  );
};

export default Relacja;
