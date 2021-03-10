import React from "react";
import s from './Counter.module.scss'
import {Button} from "../Button/Button";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import {ErrorStateType} from "../../bll/errorReducer";

export type CounterPropsType = {
    currentValue: number
    maxValue: number
    error: ErrorStateType
    reachedMax: boolean
    atTheStartValue: boolean
    incrementCount: () => void
    restartCount: () => void
}

export const Counter: React.FC<CounterPropsType> = ({
     currentValue,
     incrementCount,
     error,
     maxValue,
     atTheStartValue,
     restartCount,
     reachedMax,
}) => {

    return (
        <div className={s.counter}>
            <CounterDisplay currentValue={currentValue} error={error} maxValue={maxValue} reachedMax={reachedMax}/>
            <div className={s.buttonWrapper}>
                <Button onClick={incrementCount} disabled={reachedMax || error.status}>
                    Increment
                </Button>
                <Button onClick={restartCount} disabled={atTheStartValue || error.status}>
                    Restart
                </Button>
            </div>
        </div>
    )
}