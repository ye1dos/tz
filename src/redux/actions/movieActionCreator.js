import * as actions from './actionTypes'
import axios from 'axios'
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
    return (dispatch) => {
        dispatch(fetchMoviePending())
        axios.get(`https://api.kinopoisk.cloud/movies/all/page/${page}/token/${process.env.REACT_APP_TOKEN}`)
        .then(res => {
            if(res.error){
                throw(res.error)
            }
            dispatch(fetchMovieSuccess(res.data))
            
        })
        .catch(err => dispatch(fetchMovieError(err)))
    }
}