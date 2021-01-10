import React from "react";
import s from './CounterDisplay.module.scss'

type CounterDisplayType = {
    count: number;
}

export function CounterDisplay (props: CounterDisplayType) {

    let counterStyle = () => {
        return (props.count === 5) ? s.maxCount : '';
    }

    return (
        <div className={s.counterDisplay}>
            <span className={counterStyle()}>{props.count}</span>
        </div>
    )
}