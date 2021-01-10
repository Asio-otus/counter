import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import s from './Counter.module.scss'
import {CounterButton} from "./CounterButton/CounterButton";

export function Counter() {

    let [count, setCount] = useState<number>(0)

    let increment = () => {
        if (count < 5) {
            setCount(++count)
        }
    }

    let resetCount = () => {
        setCount(0)
    }

    let buttonFunctions = {
        increment: increment,
        resetCount: resetCount
    }

    return (
        <div className={s.counter}>
            <CounterDisplay count={count}/>
            <div className={s.buttonWrapper}>
                <CounterButton buttonName={'Increment'} count={count} buttonFunctions={buttonFunctions}/>
                <CounterButton buttonName={'Reset'} count={count} buttonFunctions={buttonFunctions}/>
            </div>
        </div>
    )
}