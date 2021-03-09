import React from 'react';
import {Counter} from "../components/Counter/Counter";
import s from './CounterPage.module.scss'
import {
    incrementCountAC,
    restartCountAC, changeEndValueAC,
    changeStartValueAC, setNewValuesAC, CounterStateType
} from "../bll/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {ErrorStateType} from "../bll/errorReducer";
import {CounterSetter} from "../components/CounterSetter/CounterSetter";

export const CounterContainer = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType, CounterStateType>(state => state.counter)
    const error = useSelector<RootStateType, ErrorStateType>(state => state.error)

    const incrementCount = () => {
        dispatch(incrementCountAC())
    }

    const restartCount = () => {
        dispatch(restartCountAC())
    }

    const setStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
    }

    const setEndValue = (newValue: number) => {
        dispatch(changeEndValueAC(newValue))
    }

    const setNewValues = () => {
        dispatch(setNewValuesAC())
    }

    const disableIncrementButton = () => {
        return counter.currentValue === counter.maxValue;
    }

    const disableResetButton = () => {
        return counter.currentValue === counter.startValue;
    }

    return (
        <div className={s.counterPage}>
            <Counter currentValue={counter.currentValue}
                     maxValue={counter.maxValue}
                     incrementCount={incrementCount}
                     error={error}
                     restartCount={restartCount}
                     disableIncrementButton={disableIncrementButton}
                     disableResetButton={disableResetButton}/>

            <CounterSetter startValue={counter.tempStartValue}
                           endValue={counter.tempMaxValue}
                           error={error}
                           setStartValue={setStartValue}
                           setEndValue={setEndValue}
                           setNewValues={setNewValues}/>
        </div>
    )
}