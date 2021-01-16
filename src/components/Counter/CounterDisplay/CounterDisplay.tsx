import React from "react";
import s from './CounterDisplay.module.scss'

type CounterDisplayType = {
    count: number
}

export function CounterDisplay(props: CounterDisplayType) {

    return (
        <div className={s.counterDisplay}>
            <span>{props.count}</span>
        </div>
    )
}