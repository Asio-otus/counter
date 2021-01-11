import React from "react";
import s from './CounterDisplay.module.scss'
import {limitValueType} from "../../../App";

type CounterDisplayType = {
    count: number
    limitValue: limitValueType
    counterSet: boolean
    tempLimitValue: limitValueType
}

export function CounterDisplay(props: CounterDisplayType) {

    let counterStyle = () => {
        return (props.count === props.limitValue.maxValue) ? s.maxCount : '';
    }


    let displayMessage = () => {
        if (!props.counterSet) {
            if (props.tempLimitValue.maxValue <= props.tempLimitValue.startValue) {
                return 'Max value must be higher than start value'
            } else {
                return 'Press «Set» to change settings'
            }
        } else {
            return props.count
        }
    }

    return (
        <div className={s.counterDisplay}>
            <span className={counterStyle()}>{displayMessage()}</span>
        </div>
    )
}