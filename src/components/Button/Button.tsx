import React from "react";
import s from './Button.module.scss'
import {buttonFunctionsType, buttonNameType} from "../../App";

type ButtonPropsType = {
    buttonName: buttonNameType
    buttonFunctions: buttonFunctionsType
    disabled: boolean
}

export function Button(props: ButtonPropsType) {

    let buttonStyle = () => {
        return props.disabled ?  s.disabled : ''
    }

    let buttonFunc = () => {

        switch (props.buttonName) {
            case 'Increment':
                return props.buttonFunctions.increment;
            case 'Reset':
                return props.buttonFunctions.resetCount;
            case 'Set counter':
                return props.buttonFunctions.SetCounter;
        }
    }

    return (
        <button className={`${s.btn} ${buttonStyle()}`} onClick={buttonFunc()} disabled={props.disabled}>{props.buttonName}</button>
    )
}