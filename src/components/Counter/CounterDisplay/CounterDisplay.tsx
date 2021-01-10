import React from "react";
import s from './CounterDisplay.module.scss'
import {limitValueType} from "../../../App";

type CounterDisplayType = {
    count: number
    limitValue: limitValueType
}

export function CounterDisplay (props: CounterDisplayType) {

    let counterStyle = () => {
        return (props.count === props.limitValue.maxValue) ? s.maxCount : '';
    }

    return (
        <div className={s.counterDisplay}>
            <span className={counterStyle()}>{props.count}</span>
        </div>
    )
}