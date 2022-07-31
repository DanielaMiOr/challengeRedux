import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import ContainerProducts from './components/ContainerProducts';
import Table from './components/Table';
import React, { useState, useEffect } from 'react';
import { getProducts } from "./components/RequestHandler";
import AddProducts from './components/AddProducts';



function App() {
  const [products, setProducts] = useState([]);
  const [isViewTable, setViewTable] = useState(false);
  const [addProduct, setAddProduct] = useState([]);



  useEffect(() => {
    console.log("inside use effect")
    loadProducts();
  }, []);

  const viewTable = () => {
    setViewTable(true);

  }
  const viewAddProduct = () => {
    setViewTable(false)

  }
  const loadProducts = async () => {
    console.log("load products running")
    const productsResult = await getProducts();
    console.log(productsResult.products)
    setProducts(productsResult.products)
  }
  return (
    <>
    <div className="containerPrincipal">
      {/* <Nav /> */}
      <Header />
      <ContainerProducts
  //  key={product.id}
   ></ContainerProducts>
   <AddProducts/>
    {/* <Table
   data={products} 
  ></Table> */}
      {/* <section> 
      {isViewTable &&
        products &&
        products.map((product) => {
          return (
            
   <ContainerProducts
   key={product.id}
   ></ContainerProducts>
    <Table
   data={products} 
  ></Table>

          );
        })}
      {!isViewTable &&
        addProduct &&
        addProduct.map((addProduct) => {
          return (
            <AddProducts />
            
          );
        })
      } */}
      {/* </section> */}
    </div>
    </>
  )
  
}

export default App;
