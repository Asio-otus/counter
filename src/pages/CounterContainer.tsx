import React, {useEffect} from 'react';
import {Counter} from "../components/Counter/Counter";
import s from './CounterPage.module.scss'
import {
    incrementCountAC,
    restartCountAC, changeEndValueAC,
    changeStartValueAC, CounterStateType, reachedMax, applyNewValuesAC
} from "../bll/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {clearError, ErrorStateType, MaxValueTooLowError, StartValueIsBelowZeroError} from "../bll/errorReducer";
import {CounterSetter} from "../components/CounterSetter/CounterSetter";

export const CounterContainer = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType, CounterStateType>(state => state.counter)
    const error = useSelector<RootStateType, ErrorStateType>(state => state.error)

    useEffect(() => {
        if (counter.tempStartValue < 0) {
            dispatch(StartValueIsBelowZeroError())
        } else if (counter.tempMaxValue <= counter.tempStartValue) {
            dispatch(MaxValueTooLowError())
        } else {
            dispatch(clearError())
        }
    }, [counter])

    const incrementCount = () => {
        dispatch(incrementCountAC())
        // I Think, I need to find a better solution.
        if (counter.currentValue === counter.maxValue - 1) {
            dispatch(reachedMax(true))
        }
    }

    const restartCount = () => {
        dispatch(restartCountAC())
    }

    const setStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
    }

    const setMaxValue = (newValue: number) => {
        dispatch(changeEndValueAC(newValue))
    }

    const applyNewValues = () => {
        dispatch(applyNewValuesAC())
    }

    return (
        <div className={s.counterPage}>
            <Counter currentValue={counter.currentValue}
                     maxValue={counter.maxValue}
                     reachedMax={counter.reachedMax}
                     atTheStartValue={counter.atTheStartValue}
                     incrementCount={incrementCount}
                     error={error}
                     restartCount={restartCount}/>

            <CounterSetter startValue={counter.tempStartValue}
                           endValue={counter.tempMaxValue}
                           settingsApplied={counter.settingsApplied}
                           errorStatus={error.status}
                           setStartValue={setStartValue}
                           setMaxValue={setMaxValue}
                           applyNewValues={applyNewValues}/>

        </div>
    )
}