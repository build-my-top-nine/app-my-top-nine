import {SEND_DETAILS} from './actions'

const initialState = {
    userId: null,
    isLoggingIn: false,
    logInSuccess: false,
    logInFail: false
    
}

export default function (state = initialState, action) {
    switch(action.type){
        case SEND_DETAILS:


        default:
            return state
    }

    return state
}