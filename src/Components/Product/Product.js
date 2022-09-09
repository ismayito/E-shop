import React from 'react';
import {Card , CardMedia, CardContent, CardActions, IconButton, Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from "./style";

const Product = ({items}) => {
    console.log(items);
    

    const classes=useStyles();
  return (
    <Card className={classes.root}  container >
        <CardMedia  container className={classes.media} image = {items.image.url} component="img" title={items.name} sx={{witdth:'40px',height:'180px'}}></CardMedia>
        <CardContent className={classes.CardContent}>
            <div>
                
            <Typography variant="h5">{items.name}</Typography>
            <Typography variant="h5">{items.price.formatted_with_symbol}</Typography>
            </div>
            <Typography dangerouslySetInnerHTML={ { __html:items.description}} variant="body2" color="textSecondary"></Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Add to cart">
                <AddShoppingCartIcon></AddShoppingCartIcon>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product