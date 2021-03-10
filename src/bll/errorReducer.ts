export type ErrorStateType = {
    status: boolean
    errorMassage: string
}

type ActionType = ReturnType<typeof MaxValueTooLowError>
    | ReturnType<typeof StartValueIsBelowZeroError>
    | ReturnType<typeof clearError>

const errorsInitialState: ErrorStateType = {
    status: false,
    errorMassage: ''
}

export const errorReducer = (state: ErrorStateType = errorsInitialState, action: ActionType) => {
    switch (action.type) {
        case 'MAX_VALUE_TOO_LOW':
            return {
                ...state,
                status: true,
                errorMassage: 'Max value must be higher the start value'
            }
        case 'START_VALUE_IS_NEGATIVE':
            return {
                ...state,
                status: true,
                errorMassage: 'Start value cannot be negative'
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                status: false,
                errorMassage: ''
            }
        default:
            return state
    }
}

export const MaxValueTooLowError = () => {
    return {type: 'MAX_VALUE_TOO_LOW'} as const
}

export const StartValueIsBelowZeroError = () => {
    return {type: 'START_VALUE_IS_NEGATIVE'} as const
}

export const clearError = () => {
    return {type: 'CLEAR_ERROR'} as const
}