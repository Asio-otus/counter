import React from "react";
import s from './Button.module.css'

type ButtonType = {
    buttonName: 'Increment' | 'Reset'
    count: number
    buttonFunctions: {
        increment: () => void;
        resetCount: () => void;
    }
}

export function Button(props: ButtonType) {

    let buttonStyle = () => {
        switch (props.buttonName) {
            case "Increment": return (props.count === 5) ? s.disabled : '';
            case "Reset": return (props.count < 5) ? s.disabled : '';
        }
    }

    let buttonFunc = () => {
        switch (props.buttonName) {
            case "Increment": return props.buttonFunctions.increment();
            case "Reset": return props.buttonFunctions.resetCount();
        }
    }

    return (
        <button className={`${s.button} ${buttonStyle()}`} onClick={buttonFunc}>{props.buttonName}</button>
    )
}