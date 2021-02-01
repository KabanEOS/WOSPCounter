import "./relacja.css";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import headTitle from "./img/wygrywamy.png";
import dwa from "./img/29.png";
import pulse from "./img/pulse1.png";
import { globalVal } from "./globalVal";
import Confetti from "react-dom-confetti";
import useSound from "use-sound";
import horn from "./horn.mp3";
import axios from 'axios';


// import useWindowSize from './use-window-size';

function fetchVal () {
  return axios.get('http://localhost:3001/value');
}

const Relacja = () => {

  
  //confetti ignition
  const [con, setCon] = useState(false);
  //sound ignition
  const [play] = useSound(horn);
  
  const [initiallyRendered, setInitiallyRendered] = useState(false);
  // const newVal = fetchVal();
  // console.log(newVal)

  const {countUp, update} = useCountUp({   
    duration: 5,
    start: 0,
    end: 0
  })

  const [flag, setFlag] = useState(false);


  // setCon(true);
  // useEffect(() => {
  //   if(!con && flag) {
  //     setCon(true);
  //     setFlag(false);
  //   }
  // }, [con])

  const [newVal, setNewVal] = useState(0);
  useEffect(() => {

    setInterval(() => {
      fetchVal().then(response => {
        console.log(response)

        if(response.data.value !== newVal) {
          setNewVal(response.body);

          // debugger;
          update(response.data.value);

          setCon(true);
          // setFlag(true);

          // a();
          // setCon(!con);
          console.log(con)
        }

        setInitiallyRendered(true);

      })
  
    }, 1000);

  }, [])

  const [extras, setExtras] = useState(false);

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
        <div className="pulse">
          <img src={pulse} alt="pulse" />;
        </div>

        <div className="relacjaBlock">
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/9BJyy-o5vV0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="hajsCounter">
          <div className="countUp">
            <span className="countUpUp">zebraliśmy już {countUp} zł</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relacja;
