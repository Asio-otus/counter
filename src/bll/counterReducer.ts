export type CounterStateType = typeof counterInitialState

type ActionType =
    ReturnType<typeof incrementCountAC>
    | ReturnType<typeof restartCountAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeEndValueAC>
    | ReturnType<typeof applyNewValues>
    | ReturnType<typeof reachedMax>

export const counterInitialState = {
    settingsApplied: true,
    atTheStartValue: true,
    reachedMax: false,
    currentValue: 0,
    startValue: 0,
    maxValue: 10,
    tempStartValue: 0,
    tempMaxValue: 10,
}

export const counterReducer = (state: CounterStateType = counterInitialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                currentValue: state.currentValue + 1,
                atTheStartValue: false
            }
        case 'RESTART': {
            return {
                ...state,
                currentValue: state.startValue,
                atTheStartValue: true
            }
        }
        case 'CHANGE_START_VALUE': {
            return {
                ...state,
                tempStartValue: action.newValue,
                settingsApplied: false
            }
        }
        case 'CHANGE_END_VALUE': {
            return {
                ...state,
                tempMaxValue: action.newValue,
                settingsApplied: false
            }
        }
        case 'APPLY_SETTINGS': {
            return {
                ...state,
                currentValue: state.tempStartValue,
                startValue: state.tempStartValue,
                maxValue: state.tempMaxValue,
                settingsApplied: true
            }
        }
        case 'REACHED_MAX': {
            return {
                ...state,
                reachedMax: action.isMax
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

export const applyNewValues = () => {
    return {type: 'APPLY_SETTINGS'} as const
}

export const reachedMax = (isMax: boolean) => {
    return {type: 'REACHED_MAX', isMax} as const
}