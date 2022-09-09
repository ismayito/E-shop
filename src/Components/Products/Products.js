import React from 'react';
import {Grid} from "@mui/material";
import Product from '../Product/Product';
import useStyles from "./styles"

 const Products = ({products,addtocart}) => {
    const classes=useStyles();
    //console.log(addToCart)
    // const product=[
    //     {id:1,name:"shoes", desc:"running shoes",price:'$10', image:"https://image.shutterstock.com/image-photo/man-tying-running-shoes-600w-670262131.jpg"},
    //     {id:2,name:"macbook", desc:"macbook laptop" ,price:"$234",image:"https://www.bing.com/th?id=OIP.OGdO4LboxkFkLgS-mDZufAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"}


    // ]
  return (
   <main className={classes.content}>
    <div className={classes.toolbar}></div>
    <Grid container justifyContent= "center" spacing={4}>
        {products.map(item=>(
            <Grid item key={item.id} xs={12} sm={6} lg={3} md={4}>
                <Product items={item}  AddToCart={addtocart}></Product>
            </Grid>

        ))}
    </Grid>

   </main>
  )
}
export default Products
