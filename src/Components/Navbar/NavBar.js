import React from 'react';
import { AppBar,Toolbar,Badge,IconButton,MenuItem,Menu,Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {} from '@mui/icons-material/AddShoppingCart';
import Logo from "../../assets/commerce.png";
import useStyles from "./styles"
const NavBar = ({carttotal}) => {
    console.log(carttotal)
    const classes=useStyles();
  return (
    <>
    <AppBar posittion="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography variant='h6' className={classes.title}>
                <img src={Logo} alt="titie" height={25} ></img>
                E-Shop
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={carttotal} color="secondary">
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </div>
            </Typography>
        </Toolbar>

    </AppBar>
    </>
  )
}

export default NavBar