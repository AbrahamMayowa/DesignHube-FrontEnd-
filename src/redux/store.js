import {createStore, combineReducers} from 'redux'
import ReducerData from './reducer'

const reducers = combineReducers({
    subStore: ReducerData
})

export const store = createStore(reducers)