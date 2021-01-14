import * as actions from '../actions/actionTypes'
const initialState = {
    pending: false,
    data: null,
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.GET_MOVIE_PENDING:
            return {...state, pending: true}
        case actions.GET_MOVIE_FINISHED:
            return {...state, pending: false, data: action.data}
        case actions.GET_MOVIE_ERROR:
            return {...state, pending: false, error: action.error}
        default:
            return state
    }
}

export default movieReducer;