import { takeEvery } from 'redux-saga/effects'
import * as constant from './constant'

function* postEmail(action: {
    payload:{
        email,
        cb: (isSuccess) => {}
    }
}) {
    yield put({
        type: constant.POST_EMAIL,
        payload: action.payload.email
    })
}

function* postEmailSaga() {
    yeild takeEvery(constant.POST_EMAIL, postEmail)
}
export default [postEmailSaga()]
