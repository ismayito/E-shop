import React from 'react';
import {Card , CardMedia, CardContent, CardActions, IconButton, Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from "./style";

const Product = ({items,AddToCart}) => {
    //console.log(items);
    //console.log(addToCart)
    

    const classes=useStyles();
  return (
    <Card className={classes.root}   >
        <CardMedia   className={classes.media} image = {items.image.url} component="img" title={items.name} sx={{witdth:'40px',height:'180px'}}></CardMedia>
        <CardContent className={classes.CardContent}>
            <div sx={{dispay:"flex"}}>
                
            <Typography variant="h5">{items.name}</Typography>
            <Typography variant="h5">{items.price.formatted_with_symbol}</Typography>
            </div>
            <Typography dangerouslySetInnerHTML={ { __html:items.description}} variant="body2" color="textSecondary"></Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Add to cart" onClick={()=>AddToCart(items.id,1)}>
                <AddShoppingCartIcon></AddShoppingCartIcon>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product