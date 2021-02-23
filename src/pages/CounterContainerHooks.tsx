import React, {useReducer} from 'react';
import {Counter} from "../components/Counter/Counter";
import s from './CounterPage.module.scss'
import {
    counterInitialState,
    counterReducer,
    incrementCountAC,
    restartCountAC, changeEndValueAC,
    changeStartValueAC, setNewValuesAC
} from "../bll/counterReducer";
import {CounterSetter} from '../components/CounterSetter/CounterSetter';

export const CounterContainerHooks = () => {

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

    const setStartValue = (newValue: number) => {
        dispatchToCounter(changeStartValueAC(newValue))
    }

    const setEndValue = (newValue: number) => {
        dispatchToCounter(changeEndValueAC(newValue))
    }

    const setNewValues = () => {
        dispatchToCounter(setNewValuesAC())
    }

    return (
        <div className={s.counterPage}>

            <Counter count={counter.currentValue}
                     incrementCount={incrementCount}
                     restartCount={restartCount}
                     disableIncrementButton={disableIncrementButton}
                     disableResetButton={disableResetButton}/>

            <CounterSetter startValue={counter.tempStartValue}
                           endValue={counter.tempEndValue}
                           error={counter.error}
                           setStartValue={setStartValue}
                           setEndValue={setEndValue}
                           setNewValues={setNewValues}/>
        </div>
    );
}