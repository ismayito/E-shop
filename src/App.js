

import { useState,useEffect } from "react";
import {NavBar, Products} from "../src/Components/"
import {commerce} from "./lib/Commerce"


function App() {
  const [products,setProducts]=useState([]);
  const fetchProducts= async ()=>{
    const {data}=await commerce.products.list();
    setProducts(data);
  }
   useEffect(() => {
   fetchProducts()
   }, [])
   console.log(products)
   
  return (
    <div className="App">
      <NavBar></NavBar>
      <Products products={products}></Products>
    </div>
  );
}

export default App;
