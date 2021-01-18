import React from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import s from './Counter.module.scss'
import {Button} from "../Button/Button";
import {buttonFunctionsType, buttonType, errorType, limitValueType} from "../../App";

export type CounterPropsType = {
    count: number
    error: errorType
    limitValue: limitValueType
    tempLimitValue: limitValueType
    buttons: Array<buttonType>
    buttonFunctions: buttonFunctionsType
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={s.counter}>
            <CounterDisplay count={props.count} error={props.error}/>
            <div className={s.buttonWrapper}>
                <Button buttonName={props.buttons[0].buttonName} buttonFunctions={props.buttonFunctions} disabled={props.buttons[0].disabled} />
                <Button buttonName={props.buttons[1].buttonName} buttonFunctions={props.buttonFunctions} disabled={props.buttons[1].disabled}/>
            </div>
        </div>
    )
}