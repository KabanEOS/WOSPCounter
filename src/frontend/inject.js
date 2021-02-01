import "./inject.css";
import React, { Component } from "react";
import { useState } from "react";
import { QtyCounter } from "./QtyCounter";
import headTitle from "./img/wygrywamy.png";
import dwa from "./img/29.png";
import pulse from "./img/pulse1.png";
import axios from 'axios';

const Inject = () => {

    let qtyVal = 0;
    let curVal = 0;
    
    const callback = (qty) => {
        qtyVal = qty;
    };
    
    const updateVal = () => {
        curVal = qtyVal;
        console.log(curVal)
        const newVal = {
          counterValue: curVal,
        }
        axios.post('http://localhost:3001/create', newVal)
    }

  return (
      <div className="wrapperInject">
        <div className="dwa">
          <img src={dwa} alt="dwiasca" />;
        </div>
        <div className="title">
          <img src={headTitle} alt="headTitle" />;
        </div>
        <div className="pulse" >
          <img src={pulse} alt="pulse" />;
        </div>

        <div className="hajsInput">
            <QtyCounter onChangeValue={callback}></QtyCounter>
        </div>
        
        <button onClick={updateVal} className="updateBtn">
            Update Counter!
        </button>
      </div>
  );
};

export default Inject;
