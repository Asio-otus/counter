import React, {ChangeEvent, useState} from 'react';
import './App.scss';
import {Counter} from "./components/Counter/Counter";
import {CounterSet} from "./components/CounterSet/CounterSet";

export type limitValueType = {
    maxValue: number
    startValue: number
}

export type buttonNameType = 'Increment' | 'Reset' | 'Set counter'

export type buttonIncrementType = () => void
export type buttonResetType = () => void
export type buttonSetCounterType = () => void


export type buttonType = {
    buttonName: buttonNameType
    disabled: boolean
}

export type buttonFunctionsType = {
    increment: buttonIncrementType
    resetCount: buttonResetType
    SetCounter: buttonSetCounterType
}

export type errorType = {
    status: boolean
    massage: string
}

export type errorsVarType = {
    condition: any
    message: string
}

export type errorsObjType = {
    error_1: errorsVarType
    error_2: errorsVarType
}

function App() {
    // State
    let [tempLimitValue, setTempLimitValue] = useState<limitValueType>({maxValue: 5, startValue: 0})
    let [limitValue, setLimitValue] = useState<limitValueType>({
        maxValue: tempLimitValue.maxValue,
        startValue: tempLimitValue.startValue
    })

    let [count, setCount] = useState<number>(0)

    let [buttons, setButtons] = useState<Array<buttonType>>([
        {buttonName: 'Increment', disabled: false},
        {buttonName: 'Reset', disabled: true},
        {buttonName: 'Set counter', disabled: false}
    ])

    let [error, setError] = useState<errorType> ({status: false, massage: ''})

    // Variables
    const errors: errorsObjType = {
        error_1: {condition: tempLimitValue.maxValue <= tempLimitValue.startValue, message: 'Max value should be higher then start value'},
        error_2: {condition: tempLimitValue.startValue < 0, message: `Values shouldn't be negative`}
    }

    // Functions
    const disableButton = {
        Increment: () => {
            buttons[0].disabled = true;
            setButtons([...buttons])
        },
        Reset: () => {
            buttons[1].disabled = true;
            setButtons([...buttons])
        },
        SetCounter: () => {
            buttons[2].disabled = true;
            setButtons([...buttons])
        }
    }

    const enableButton = {
        Increment: () => {
            buttons[0].disabled = false;
            setButtons([...buttons])
        },
        Reset: () => {
            buttons[1].disabled = false;
            setButtons([...buttons])
        },
        SetCounter: () => {
            buttons[2].disabled = false;
            setButtons([...buttons])
        }
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTempLimitValue({...tempLimitValue, startValue: +e.currentTarget.value})
        enableButton.SetCounter()
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTempLimitValue({...tempLimitValue, maxValue: +e.currentTarget.value})
        enableButton.SetCounter()
    }

    const counterLimitsSet = () => {
        setError({...error, status: false, massage: ''})
        setLimitValue({...tempLimitValue})
        setCount(tempLimitValue.startValue)
        disableButton.SetCounter()
        enableButton.Increment()
        disableButton.Reset()
    }

    const errorHandler = (errorsVar: errorsVarType) => {
        setError({...error, status: true, massage: errorsVar.message})
        disableButton.Increment()
        disableButton.Reset()
    }

    const buttonFunctions = {
        increment: () => {
            if (count < limitValue.maxValue) {
                setCount(count + 1)
                enableButton.Reset();
                if (count === limitValue.maxValue - 1) {
                    disableButton.Increment()
                }
            }
        },

        resetCount: () => {
            setCount(limitValue.startValue)
            disableButton.Reset()
            enableButton.Increment()
            setButtons([...buttons])
        },

        SetCounter: () => {
            if (errors.error_1.condition) {
                errorHandler(errors.error_1)
            } else if (errors.error_2.condition) {
                errorHandler(errors.error_2)
            } else {
                counterLimitsSet()
            }
        }
    }

    return (
        <div className={'app'}>
            <Counter count={count}
                     error={error}
                     limitValue={limitValue}
                     tempLimitValue={tempLimitValue}
                     buttons={buttons}
                     buttonFunctions={buttonFunctions}/>
            <CounterSet error={error}
                tempLimitValue={tempLimitValue}
                        changeStartValue={changeStartValue}
                        changeMaxValue={changeMaxValue}
                        buttons={buttons}
                        buttonFunctions={buttonFunctions}/>
        </div>
    );
}

export default App;
