type StateType = typeof counterInitialState
type ActionType =
    ReturnType<typeof incrementCountAC>
    | ReturnType<typeof restartCountAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeEndValueAC>
    | ReturnType<typeof setNewValuesAC>

export type ErrorMassageType = {id: number, message: string}

const errorMassages: Array<ErrorMassageType> = [
    {id: 1, message: 'End value must be higher than start value'},
    {id: 2, message: 'Start value must be higher than 0'}
]

export const counterInitialState = {
    currentValue: 0,
    startValue: 0,
    tempStartValue: 0,
    endValue: 10,
    tempEndValue: 10,
    error: {
        status: false,
        errorMassages
    },

}

export const counterReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case 'RESTART': {
            return {
                ...state,
                currentValue: state.startValue
            }
        }
        case 'CHANGE_START_VALUE': {
            return {
                ...state,
                tempStartValue: action.newValue,
            }
        }
        case 'CHANGE_END_VALUE': {
            return {
                ...state,
                tempEndValue: action.newValue
            }
        }
        case 'SET_NEW_VALUES': {
            return {
                ...state,
                currentValue: state.tempStartValue,
                startValue: state.tempStartValue,
                endValue: state.tempEndValue
            }
        }
        default:
            return state
    }
}

export const incrementCountAC = () => {
    return {type: 'INCREMENT'} as const
}

export const restartCountAC = () => {
    return {type: 'RESTART'} as const
}

export const changeStartValueAC = (newValue: number) => {
    return {type: 'CHANGE_START_VALUE', newValue} as const
}

export const changeEndValueAC = (newValue: number) => {
    return {type: 'CHANGE_END_VALUE', newValue} as const
}

export const setNewValuesAC = () => {
    return {type: 'SET_NEW_VALUES', } as const
}