import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MovieModal from './Modal';

const useStyles = makeStyles({
    root: {
        maxWidth: 200
    },
    media: {
        maxHeight: 300,
        width: 200
    },
  });

const Item = ({movie}) => {
    let url = movie.poster ? `https:${movie.poster}` : null

    const classes = useStyles();

    // Modal
    const [open, setOpen] = useState();
    const handleOpen = (child) => {
      console.log(child)
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <Card className={classes.root}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={url}
                    height="520"
                    width="360"
                />
                <CardContent>
                    <Typography>
                        {movie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
        <MovieModal
        open={open}
        handleClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
        movie={movie}
      />
        </div>
    )
}
export default Item;