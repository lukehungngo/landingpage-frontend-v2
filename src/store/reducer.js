import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import emailReducer from './email/EmailReducer'

const persistConfig = {
    key: 'root',
    storage,
}
const combineReducer = combineReducers({
    emailReducer
})
const persistReducer = persistReducer(persistConfig, combineReducer)

export default persistReducer