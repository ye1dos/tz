import React, {useState, useEffect} from 'react';
import Item from './Item';

const Card = ({movies}) => {
    return (
        <div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {console.log(movies)}
            {movies && movies.map((movie, index) => {
                return (<div style={{margin: '20px'}}>
                    <Item key={movie.id} movie={movie}/>
                </div>)
            })}
        </div>
    )
}
export default Card;