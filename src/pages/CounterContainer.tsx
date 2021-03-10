import React, {useEffect} from 'react';
import {Counter} from "../components/Counter/Counter";
import s from './CounterPage.module.scss'
import {
    incrementCountAC,
    restartCountAC, changeEndValueAC,
    changeStartValueAC, CounterStateType, reachedMax, applyNewValues
} from "../bll/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {clearError, ErrorStateType, MaxValueTooLow, StartValueBelowZero} from "../bll/errorReducer";
import {CounterSetter} from "../components/CounterSetter/CounterSetter";

export const CounterContainer = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType, CounterStateType>(state => state.counter)
    const error = useSelector<RootStateType, ErrorStateType>(state => state.error)

    useEffect(() => {
        if (counter.tempStartValue < 0) {
            dispatch(StartValueBelowZero())
        } else if (counter.tempMaxValue <= counter.tempStartValue) {
            dispatch(MaxValueTooLow())
        } else {
            dispatch(clearError())
        }
    }, [counter])

    const incrementCount = () => {
        dispatch(incrementCountAC())
        if (counter.currentValue === counter.maxValue - 1) {
            console.log('max')
            dispatch(reachedMax(true))
        }
    }

    const restartCount = () => {
        dispatch(restartCountAC())
        dispatch(reachedMax(false))
    }

    const setStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
    }

    const setEndValue = (newValue: number) => {
        dispatch(changeEndValueAC(newValue))
    }

    const setNewValues = () => {
        dispatch(applyNewValues())
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
                           setEndValue={setEndValue}
                           setNewValues={setNewValues}/>

        </div>
    )
}