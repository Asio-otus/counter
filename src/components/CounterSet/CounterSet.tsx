import React, {ChangeEvent, useState} from "react";
import s from './CounterSet.module.scss'
import {CounterSetButton} from "./CounterSetButton/CounterSetButton";
import {limitValueType, refreshCounterType} from "../../App";

export type CounterSetPropsType = {
    limitValue: limitValueType
    setLimitValue: (limit: limitValueType) => void
    counterLimitsSet: () => void
    tempLimitValue: limitValueType
    setTempLimitValue: (limit: limitValueType) => void
}

export function CounterSet(props: CounterSetPropsType) {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTempLimitValue({...props.tempLimitValue, maxValue: +e.currentTarget.value})
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTempLimitValue({...props.tempLimitValue, startValue: +e.currentTarget.value})
    }

    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={s.input} type="number" value={props.tempLimitValue.maxValue} onChange={changeMaxValue}/>
                </div>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={s.input} type="number" value={props.tempLimitValue.startValue} onChange={changeStartValue}/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <CounterSetButton counterLimitsSet={props.counterLimitsSet} />
            </div>
        </div>
    )
}