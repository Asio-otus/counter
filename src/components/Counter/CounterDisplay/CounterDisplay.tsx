import React from "react";
import s from './CounterDisplay.module.scss'
import {limitValueType} from "../../../App";

type CounterDisplayType = {
    count: number
    limitValue: limitValueType
    counterSet: boolean
}

export function CounterDisplay (props: CounterDisplayType) {

    let counterStyle = () => {
        return (props.count === props.limitValue.maxValue) ? s.maxCount : '';
    }

    let displayValue = () => {
        return !props.counterSet ? 'Press set to change settings' : props.count
    }

    return (
        <div className={s.counterDisplay}>
            <span className={counterStyle()}>{displayValue()}</span>
        </div>
    )
}