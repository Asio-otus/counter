import React from "react";
import s from './Counter.module.scss'
import {Button} from "../Button/Button";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import {ErrorStateType} from "../../bll/errorReducer";

export type CounterPropsType = {
    currentValue: number
    maxValue: number
    error: ErrorStateType
    incrementCount: () => void
    restartCount: () => void
    disableIncrementButton: () => boolean
    disableResetButton: () => boolean
}

export const Counter: React.FC<CounterPropsType> = ({
     currentValue,
     incrementCount,
     error,
     maxValue,
     restartCount,
     disableIncrementButton,
     disableResetButton
}) => {

    return (
        <div className={s.counter}>
            <CounterDisplay currentValue={currentValue} error={error} maxValue={maxValue}/>
            <div className={s.buttonWrapper}>
                <Button onClick={incrementCount} disabled={disableIncrementButton()}>
                    Increment
                </Button>
                <Button onClick={restartCount} disabled={disableResetButton()}>
                    Restart
                </Button>
            </div>
        </div>
    )
}