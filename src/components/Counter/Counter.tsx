import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import s from './Counter.module.scss'
import {CounterButton} from "./CounterButton/CounterButton";
import {limitValueType} from "../../App";

export type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    limitValue: limitValueType
    counterSet: boolean
    tempLimitValue: limitValueType
}

export function Counter(props: CounterPropsType) {

    let increment = () => {
        if (props.count < props.limitValue.maxValue) {
            props.setCount(props.count + 1)
        }
    }

    let resetCount = () => {
        props.setCount(props.limitValue.startValue)
    }

    let buttonFunctions = {
        increment: increment,
        resetCount: resetCount
    }

    return (
        <div className={s.counter}>
            <CounterDisplay counterSet={props.counterSet} count={props.count} limitValue={props.limitValue} tempLimitValue={props.tempLimitValue}/>
            <div className={s.buttonWrapper}>
                <CounterButton buttonName={'Increment'} count={props.count} buttonFunctions={buttonFunctions} limitValue={props.limitValue} counterSet={props.counterSet}/>
                <CounterButton buttonName={'Reset'} count={props.count} buttonFunctions={buttonFunctions} limitValue={props.limitValue} counterSet={props.counterSet}/>
            </div>
        </div>
    )
}