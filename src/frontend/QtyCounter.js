import "./QtyCounter.css";
import { Link } from "react-router-dom";
import React, { useState, Text, TextInput, View  } from "react";


export const QtyCounter = (props) => {

    const oldVal = 0;

    const onChangeValue = props.onChangeValue;

    const [qtyValue, setQtyValue] = useState();

    return <>
      <p className="cartItem__qty__Block">
        <div className="cartItem__qty">
        <input
                className="hajsInputInput"
                onChange={(event) => {
                    setQtyValue(parseInt(event.target.value));
                    onChangeValue(parseInt(event.target.value));
                }}
                value={qtyValue}
                placeholder={oldVal}
              />
        </div>
      </p>
    </>
}