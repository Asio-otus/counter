import React from "react";
import s from './CounterDisplay.module.scss'

export type errorType = {
    status: boolean
    massage: string
}

type PropsType = {
    count: number
    // error: errorType
    // reachedMax?: boolean
}

export const CounterDisplay: React.FC<PropsType> =({count}) => {

    // const display = () => props.error.status ? props.error.massage : props.count
    // const errorStyle = () => props.error.status ? s.error : ''
    // const maxStyle = () => props.reachedMax ? s.maxCount : ''

    return (
        // <div className={`${s.counterDisplay} ${maxStyle()} ${errorStyle()}`}>
        //     <span>{display()}</span>
        // </div>
        <div className={s.counterDisplay}>
            <span>{count}</span>
        </div>
    )
}