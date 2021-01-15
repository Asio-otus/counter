import React, {useState} from 'react';
import './App.scss';
import {Counter} from "./components/Counter/Counter";
import {CounterSet} from "./components/CounterSet/CounterSet";
import s from "./components/Button/Button.module.scss";

export type limitValueType = {
    maxValue: number
    startValue: number
}

export type refreshCounterType = () => void

function App() {
    let [counterSet, setCounterSet] = useState<boolean>(true)
    let [tempLimitValue, setTempLimitValue] = useState<limitValueType>({maxValue: 5, startValue: 0})
    let [limitValue, setLimitValue] = useState<limitValueType>({
        maxValue: tempLimitValue.maxValue,
        startValue: tempLimitValue.startValue
    })
    let [count, setCount] = useState<number>(0)

    // Functions
    const counterLimitsSet = () => {
        setLimitValue({...tempLimitValue})
        setCount(tempLimitValue.startValue)
        setCounterSet(true)
    }

    const buttonIncrement = () => {
        if (count < limitValue.maxValue) {
            setCount(count + 1)
        }
    }

    const buttonStyleIncrement = () => {
        return (count === limitValue.maxValue) ? s.disabled : '';
    }

    const buttonResetCount = () => {
        setCount(limitValue.startValue)
    }

    const buttonStyleReset = () => {
        return (count === limitValue.startValue) ? s.disabled : '';
    }

    const buttonSetCounter = () => {
        return (tempLimitValue.maxValue <= tempLimitValue.startValue) ? () => {} : () => counterLimitsSet()
    }

    const buttonStyleSetCounter = () => {
        return (tempLimitValue.maxValue <= tempLimitValue.startValue) ? s.disabled : '';
    }



    return (
        <div className={'app'}>
            <Counter count={count}
                     setCount={setCount}
                     limitValue={limitValue}
                     counterSet={counterSet}
                     tempLimitValue={tempLimitValue}
                     buttonIncrement={buttonIncrement}
                     buttonResetCount={buttonResetCount}/>
            <CounterSet limitValue={limitValue}
                        setLimitValue={setLimitValue}
                        counterLimitsSet={counterLimitsSet}
                        tempLimitValue={tempLimitValue}
                        setTempLimitValue={setTempLimitValue}
                        counterSet={counterSet}
                        setCounterSet={setCounterSet}/>
        </div>
    );
}

export default App;
