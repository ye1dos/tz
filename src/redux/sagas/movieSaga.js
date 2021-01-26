import * as actions from '../actions/actionTypes'
import {takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'
// import fetched from '../../constants/fetched'
export function * movieSaga(){
    yield takeEvery('GET_MOVIE', fetchMovieAsync)
}

function * fetchMovieAsync(action) {
    try {
        yield put(fetchMoviePending())
        const response = yield call(() => {
            axios.get(`https://api.kinopoisk.cloud/movies/all/page/${action.page}/token/${process.env.REACT_APP_TOKEN}`)
        })
        // yield put(fetchMovieSuccess(fetched))
        yield put(fetchMovieSuccess(response.data))
    }
    catch(e) {
        yield put(fetchMovieError(e))
    }
}


const fetchMoviePending = () => {
    return {
        type: actions.GET_MOVIE_PENDING
    }
}
const fetchMovieSuccess = (data) => {
    return {
        type: actions.GET_MOVIE_FINISHED,
        data: data
    }
}
const fetchMovieError = (error) => {
    return {
        type: actions.GET_MOVIE_ERROR,
        error: error
    }
}
export const fetchMovie = (page) => {
    return {
        type: 'GET_MOVIE',
        page
    }
}