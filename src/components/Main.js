import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core/styles'
import Card from './Card';
import NotFound from './NotFound'
import fetched from '../constants/fetched'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions/movieActionCreator';

const Main = () => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const data = useSelector(state => state.movieReducer.data)
    const error = useSelector(state => state.movieReducer.error)
    useEffect(() => {
        dispatch(fetchMovie(page))
    }, [page])
    
    // const getData = () => {
    //     setData(fetched)
    // }

    const handleChange = (event, value) => {
        setPage(value)
        console.log(`value ${value}`)
    }

    const useStyles = makeStyles({
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
        }
    })
    const classes = useStyles()
    return (
        <div>
            {data && 
            <div>
                <Card movies={data.movies}/>
                <Pagination className={classes.pagination} count={data.pagination.total_pages} color='primary' onChange={handleChange}/>
            </div>}
            {error && <NotFound/>}
        </div>
    )
}
export default Main;