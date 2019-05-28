import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import persistReducer from './reducer'
import * as EmailAction from './email/EmailAction'
const sagaMiddleware = createSagaMiddleware()
export default () => {
    const store = createStore (
        persistReducer,
        applyMiddleware(sagaMiddleware, logger)
    )
    const persistor = persistStore(store)
    return { store, persistor }
}
        