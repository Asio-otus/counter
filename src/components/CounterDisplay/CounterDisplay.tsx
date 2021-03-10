import React from "react";
import s from './CounterDisplay.module.scss'
import {ErrorStateType} from "../../bll/errorReducer";

export type errorType = {
    status: boolean
    massage: string
}

type PropsType = {
    currentValue: number
    maxValue: number
    error: ErrorStateType
    reachedMax: boolean
}

export const CounterDisplay: React.FC<PropsType> =({currentValue, error, reachedMax}) => {

    // Style logic
    const display = () => error.status ? error.errorMassage : currentValue
    const errorStyle = () => error.status ? s.error : ''
    const maxStyle = () => reachedMax ? s.maxCount : ''

    return (
        <div className={`${s.counterDisplay} ${maxStyle()} ${errorStyle()}`}>
            <span>{display()}</span>
        </div>
    )
}