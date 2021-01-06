import React from "react";
import s from './CounterDisplay.module.css'

type CounterDisplayType = {
    count: number;
}

export function CounterDisplay (props: CounterDisplayType) {

    let counterStyle = () => {
        return (props.count === 5) ? s.maxCount : '';
    }

    return (
        <div className={`${s.counterDisplay} ${counterStyle()}`}>{props.count}</div>
    )
}