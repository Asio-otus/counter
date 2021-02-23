import React from "react";
import s from './CounterHooksOnly.module.scss'
import {Button} from "../Button/Button";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";

export type CounterPropsType = {
    count: number
    incrementCount: () => void
    restartCount: () => void
    disableIncrementButton: () => boolean
    disableResetButton: () => boolean
}

export const CounterHooksOnly: React.FC<CounterPropsType> = ({
     count,
     incrementCount,
     restartCount,
     disableIncrementButton,
     disableResetButton
}) => {

    return (
        <div className={s.counter}>
            <CounterDisplay count={count}/>
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