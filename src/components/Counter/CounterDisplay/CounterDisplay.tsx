import React from "react";
import s from './CounterDisplay.module.scss'
import {errorType} from "../../../App";

type CounterDisplayType = {
    count: number
    error: errorType
}

export function CounterDisplay(props: CounterDisplayType) {

    const display = () => props.error.status ? props.error.massage : props.count
    const errorStyle = () => props.error.status ? s.error : ''

    return (
        <div className={`${s.counterDisplay} ${errorStyle()}`}>
            <span>{display()}</span>
        </div>
    )
}