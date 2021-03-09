export type ErrorStateType = {
    status: boolean
    errorMassage: string
}

type ActionType = ReturnType<typeof MaxValueTooLow>
    | ReturnType<typeof StartValueBelowZero>

const errorsInitialState: ErrorStateType = {
    status: false,
    errorMassage: ''
}

export const errorReducer = (state: ErrorStateType = errorsInitialState, action: ActionType) => {
    switch (action.type) {
        case 'MAX-VALUE-TOO-LOW':
            return {
                ...state,
            }
        case 'START-VALUE-BLOW-ZERO':
            return {
                ...state,
            }
        default:
            return state
    }
}

export const MaxValueTooLow = () => {
    return {type: 'MAX-VALUE-TOO-LOW'} as const
}

export const StartValueBelowZero = () => {
    return {type: 'START-VALUE-BLOW-ZERO'} as const
}