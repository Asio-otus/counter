import React from "react";
import s from './CounterButton.module.scss'

type ButtonType = {
    buttonName: 'Increment' | 'Reset'
    count: number
    buttonFunctions: {
        increment: () => void;
        resetCount: () => void;
    }
}

export function CounterButton(props: ButtonType) {

    let buttonStyle = () => {
        switch (props.buttonName) {
            case "Increment": return (props.count === 5) ? s.disabled : '';
            case "Reset": return (props.count === 0) ? s.disabled : '';
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