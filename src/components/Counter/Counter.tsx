import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {Button} from "./Button/Button";
import s from './Counter.module.css'

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
            <div>
                <CounterDisplay count={count}/>
            </div>
            <div className={s.buttonWrapper}>
                <Button buttonName={'Increment'} count={count} buttonFunctions={buttonFunctions}/>
                <Button buttonName={'Reset'} count={count} buttonFunctions={buttonFunctions}/>
            </div>
        </div>
    )
}