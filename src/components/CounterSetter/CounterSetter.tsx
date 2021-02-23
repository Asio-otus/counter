import s from './CounterSetter.module.scss'
import React, {ChangeEvent} from "react";
import {ErrorMassageType} from "../../bll/counterReducer";
import {Button} from "../Button/Button";

type PropsType = {
    startValue: number
    endValue: number
    error: {
        status: boolean
        errorMassages: Array<ErrorMassageType>
    }
    setStartValue: (newValue: number) => void
    setEndValue: (newValue: number) => void
    setNewValues: () => void
}

export const CounterSetter: React.FC<PropsType> = ({startValue, endValue, error, setStartValue, setEndValue, setNewValues}) => {

    const errorStyle = () => error.status ? s.error : ''

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const changeEndValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEndValue(+e.currentTarget.value)
    }

    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={startValue} onChange={changeStartValue}/>
                </div>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={endValue} onChange={changeEndValue}/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button onClick={setNewValues}>
                    Set new values
                </Button>
            </div>
        </div>
    )
}