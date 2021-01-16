import React, {ChangeEvent} from "react";
import s from './CounterSet.module.scss'
import {buttonFunctionsType, buttonType, limitValueType} from "../../App";
import {Button} from "../Button/Button";

export type CounterSetPropsType = {
    tempLimitValue: limitValueType
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    buttons: Array<buttonType>
    buttonFunctions: buttonFunctionsType
}

export function CounterSet(props: CounterSetPropsType) {

    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={s.input} type="number" value={props.tempLimitValue.maxValue} onChange={props.changeMaxValue}/>
                </div>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={s.input} type="number" value={props.tempLimitValue.startValue} onChange={props.changeStartValue}/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button buttonName={props.buttons[2].buttonName}  buttonFunctions={props.buttonFunctions} disabled={props.buttons[2].disabled}/>
            </div>
        </div>
    )
}