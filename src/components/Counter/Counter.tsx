import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import s from './Counter.module.scss'
import {Button} from "../Button/Button";
import {limitValueType} from "../../App";

export type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    limitValue: limitValueType
    counterSet: boolean
    tempLimitValue: limitValueType
    buttonIncrement: () => void
    buttonResetCount: () => void
}

export function Counter(props: CounterPropsType) {

    let buttonFunctions = {
        increment: props.buttonIncrement,
        resetCount: props.buttonResetCount
    }

    return (
        <div className={s.counter}>
            <CounterDisplay counterSet={props.counterSet} count={props.count} limitValue={props.limitValue}
                            tempLimitValue={props.tempLimitValue}/>
            <div className={s.buttonWrapper}>
                <Button buttonName={'Increment'} count={props.count} buttonFunctions={buttonFunctions}
                        limitValue={props.limitValue} counterSet={props.counterSet}/>
                <Button buttonName={'Reset'} count={props.count} buttonFunctions={buttonFunctions}
                        limitValue={props.limitValue} counterSet={props.counterSet}/>
            </div>
        </div>
    )
}