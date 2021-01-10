import React from "react";
import s from './CounterButton.module.scss'
import {limitValueType} from "../../../App";

type ButtonType = {
    buttonName: 'Increment' | 'Reset'
    count: number
    buttonFunctions: {
        increment: () => void;
        resetCount: () => void;
    }
    limitValue: limitValueType
}

export function CounterButton(props: ButtonType) {

    let buttonStyle = () => {
        switch (props.buttonName) {
            case "Increment": return (props.count === props.limitValue.maxValue) ? s.disabled : '';
            case "Reset": return (props.count === props.limitValue.startValue) ? s.disabled : '';
        }
    }

    let buttonFunc = () => {
        switch (props.buttonName) {
            case "Increment": return props.buttonFunctions.increment();
            case "Reset": return props.buttonFunctions.resetCount();
        }
    }

    return (
        <button className={`${s.btn} ${buttonStyle()}`} onClick={buttonFunc}>{props.buttonName}</button>
    )
}