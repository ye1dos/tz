import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import {movieSaga} from './sagas/movieSaga'
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(movieSaga)
    return store
}
export default configureStore