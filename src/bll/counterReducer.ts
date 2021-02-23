type stateType = typeof counterInitialState
type actionType =
    ReturnType<typeof incrementCountAC>
    | ReturnType<typeof restartCountAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setEndValueAC>

export const counterInitialState = {
    currentValue: 0,
    startValue: 0,
    endValue: 10,
}

export const counterReducer = (state: stateType, action: actionType) => {
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
        case 'SET_START_VALUE': {
            return {
                ...state,
                currentValue: action.newValue,
                startValue: action.newValue,
            }
        }
        case 'SET_END_VALUE': {
            return {
                ...state,
                endValue: action.newValue
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

export const setStartValueAC = (newValue: number) => {
    return {type: 'SET_START_VALUE', newValue} as const
}

export const setEndValueAC = (newValue: number) => {
    return {type: 'SET_END_VALUE', newValue} as const
}