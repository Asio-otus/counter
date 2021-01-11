import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Counter} from "./components/Counter/Counter";
import {CounterSet} from "./components/CounterSet/CounterSet";

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

    const counterLimitsSet = () => {
        setLimitValue({...tempLimitValue})
        setCount(tempLimitValue.startValue)
        setCounterSet(true)
    }

    return (
        <div className={'app'}>
            <Counter count={count} setCount={setCount} limitValue={limitValue} counterSet={counterSet}/>
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
