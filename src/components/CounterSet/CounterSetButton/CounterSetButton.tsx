import React from "react";
import s from './CounterSetButton.module.scss'
import {refreshCounterType} from "../../../App";

type CounterSetButtonType = {
    counterLimitsSet: () => void
}

export function CounterSetButton (props: CounterSetButtonType) {


    return (
        <button className={s.btn} onClick={() => props.counterLimitsSet()}>Set</button>
    )
}