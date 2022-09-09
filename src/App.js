

import { useState,useEffect } from "react";
import {NavBar, Products} from "../src/Components/";
import {commerce} from "./lib/Commerce";


function App() {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({});
  const fetchProducts= async ()=>{
    const {data}=await commerce.products.list();
    setProducts(data);
  }
  const createCart=async()=>{
    setCart(await commerce.cart.retrieve());

  }
   const AddToCart = async(pid,qty)=>{
    commerce.cart.add(pid, qty).then((item) => {
      setCart(item.cart)});
    // const addedItem= await commerce.cart.add(pid,qty);
    // setCart(addedItem.cart);

   }
  useEffect(()=>{
    fetchProducts();
    createCart();
  },[])

  console.log(products);
  console.log(cart);
  
   
  return (
    <div className = "App">
      <NavBar carttotal={cart.total_unique_items}></NavBar>
      <Products products={products} addtocart={AddToCart} ></Products>
    </div>
  );
}

export default App;
