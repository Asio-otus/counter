import React from "react";
import s from './CounterSetButton.module.scss'
import {limitValueType, refreshCounterType} from "../../../App";

type CounterSetButtonType = {
    counterLimitsSet: () => void
    tempLimitValue: limitValueType
}

export function CounterSetButton (props: CounterSetButtonType) {

    let buttonStyle = () => {
        return (props.tempLimitValue.maxValue <= props.tempLimitValue.startValue) ? s.disabled : '';
    }

    let buttonFunc = () => {
        return (props.tempLimitValue.maxValue <= props.tempLimitValue.startValue) ? () => {} : () => props.counterLimitsSet()

    }

    return (
        <button className={`${s.btn} ${buttonStyle()}`} onClick={buttonFunc()}>Set</button>
    )
}