import React from "react";
import s from './CounterSet.module.scss'
import {CounterSetButton} from "./CounterSetButton/CounterSetButton";

export function CounterSet() {
    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={s.input} type="number"/>
                </div>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={s.input} type="number"/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <CounterSetButton/>
            </div>
        </div>
    )
}