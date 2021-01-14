import {combineReducers} from 'redux'
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
    movieReducer: movieReducer
})
export default rootReducer