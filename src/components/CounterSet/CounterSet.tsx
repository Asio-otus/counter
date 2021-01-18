import React, {ChangeEvent} from "react";
import s from './CounterSet.module.scss'
import {buttonFunctionsType, buttonType, errorType, limitValueType} from "../../App";
import {Button} from "../Button/Button";

export type CounterSetPropsType = {
    error: errorType
    tempLimitValue: limitValueType
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    buttons: Array<buttonType>
    buttonFunctions: buttonFunctionsType
}

export function CounterSet(props: CounterSetPropsType) {

    const errorStyle = () => props.error.status ? s.error : ''

    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={props.tempLimitValue.maxValue} onChange={props.changeMaxValue}/>
                </div>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={props.tempLimitValue.startValue} onChange={props.changeStartValue}/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button buttonName={props.buttons[2].buttonName}  buttonFunctions={props.buttonFunctions} disabled={props.buttons[2].disabled}/>
            </div>
        </div>
    )
}