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
    errorStatus: boolean
    errorMassage: string
}

function App() {
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

    let [error, setError] = useState<errorType> ({errorStatus: false, errorMassage: ''})

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

    const errors = {
        error_1: {errorCondition: tempLimitValue.maxValue <= tempLimitValue.startValue, errorMessage: 'Max value should be higher then start value'},
        error_2: {errorCondition: tempLimitValue.startValue < 0, errorMessage: `Values shouldn't be negative`}
    }

    // const settingRestrictions = () => {
    //     if (errors.error_1.errorCondition || errors.error_2.errorCondition) {
    //         setError({...error, errorStatus: true})
    //         console.log('Error')
    //     } else {
    //         setError({...error, errorStatus: false})
    //         console.log('No error')
    //     }
    // }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTempLimitValue({...tempLimitValue, startValue: +e.currentTarget.value})
        enableButton.SetCounter()
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTempLimitValue({...tempLimitValue, maxValue: +e.currentTarget.value})
        enableButton.SetCounter()
    }

    const counterLimitsSet = () => {
        setLimitValue({...tempLimitValue})
        setCount(tempLimitValue.startValue)
        disableButton.SetCounter()
        enableButton.Increment()
        disableButton.Reset()
        // settingRestrictions()
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
            return (errors.error_1.errorCondition || errors.error_2.errorCondition) ? () => {
            } : counterLimitsSet()
        }
    }

    return (
        <div className={'app'}>
            <Counter count={count}
                     limitValue={limitValue}
                     tempLimitValue={tempLimitValue}
                     buttons={buttons}
                     buttonFunctions={buttonFunctions}/>
            <CounterSet tempLimitValue={tempLimitValue}
                        changeStartValue={changeStartValue}
                        changeMaxValue={changeMaxValue}
                        buttons={buttons}
                        buttonFunctions={buttonFunctions}/>
        </div>
    );
}

export default App;
