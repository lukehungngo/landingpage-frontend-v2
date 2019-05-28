import { all } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import postEmailSaga from './email/EmailSaga'

export default() => {
    function* rootSaga() {
        yeild all([postEmailSaga()])
    }
    return rootSaga
}