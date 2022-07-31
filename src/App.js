import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import ContainerProducts from './components/ContainerProducts';
import Table from './components/Table';
import React, { useState, useEffect } from 'react';
import { getProducts } from "./components/RequestHandler";


function App() {
  const [products, setProducts] = useState([]);

    
  useEffect(() => {
      console.log("inside use effect")
      loadProducts();
  },[]);
  
   const loadProducts = async () => {
      console.log("load products running")
      const productsResult= await getProducts(); 
      console.log(productsResult.products)
      setProducts(productsResult.products)
   }
  return (
   <>
   <div className="containerPrincipal"> 
     {/* <Nav/> */}
   <Header/>
   <ContainerProducts/>
   <Table
   data={products}
   />
   </div>
   </>
  );
}

export default App;
