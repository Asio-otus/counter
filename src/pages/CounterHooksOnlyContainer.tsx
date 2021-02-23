import React, {useReducer} from 'react';
import {CounterHooksOnly} from "../components/Counter/CounterHooksOnly";
import s from './CounterPage.module.scss'
import {counterInitialState, counterReducer, incrementCountAC, restartCountAC} from "../bll/counterReducer";

export const CounterHooksOnlyContainer = () => {

    let [counter, dispatchToCounter] = useReducer(counterReducer, counterInitialState)

    const incrementCount = () => {
        dispatchToCounter(incrementCountAC())
    }

    const restartCount = () => {
        dispatchToCounter(restartCountAC())
    }

    const disableIncrementButton = () => {
        return counter.currentValue === counter.endValue;
    }

    const disableResetButton = () => {
        return counter.currentValue === counter.startValue;
    }

    return (
        <div className={s.counterPage}>
            <CounterHooksOnly count={counter.currentValue}
                              incrementCount={incrementCount}
                              restartCount={restartCount}
                              disableIncrementButton={disableIncrementButton}
                              disableResetButton={disableResetButton}/>
        </div>
    );
}