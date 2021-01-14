import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const MovieModal = ({open, handleClose, movie }) => {
    const useStyles = makeStyles({
        root: {
          height: 216,
          flexGrow: 1,
          maxWidth: 1000,
          paddingLeft: 500,
          textAlign: 'initial',
          borderRadius: 18
        },
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: 'white',
          border: '2px solid #000',
        }
      });
      const classes = useStyles()
      function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
          height: '400px',
          width: '450px'
        };
      }
      
      const [modalStyle] = React.useState(getModalStyle);


    const body = (child) => 
    {return (
      <div style={{textAlign: 'center'}}>
        <h4 id="simple-modal-title">{`${child.title}`}</h4>
        <div id="simple-modal-description" style={{textAlign: 'initial', paddingLeft: 100}}>
          {child.title && <p>Страна: {child.countries.join(", ")}</p>}
          {child.rating_kinopoisk && <p>Рейтинг: {child.rating_kinopoisk}</p>}
          {child.directors && <p>Директоры: {child.directors.join(", ")}</p>}
          {child.producers && <p>Продюсеры: {child.producers.join(", ")}</p>}
          {child.genres && <p>Жанры: {child.genres.join(", ")}</p>}
          {child.year && <p>Год: {child.year}</p>}
        </div>
      </div>
    );};

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {movie ? body(movie) : <div>Loading ... </div>}
        </div>
      </Modal>
    )
}
export default MovieModal;