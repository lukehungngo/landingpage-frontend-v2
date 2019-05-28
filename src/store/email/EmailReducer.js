import * as constant from './constant'
export function EmailReducer(state={
    email: []
}, action) {
    switch (action.type) {
        case constant.POST_EMAIL:
                return {...state, email: action.payload}
            
        default:
            return state
    }
}