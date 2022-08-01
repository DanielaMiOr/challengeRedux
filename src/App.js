import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import ContainerProducts from './components/ContainerProducts';
import Table from './components/Table';
import React, { useState, useEffect } from 'react';
import AddProducts from './components/AddProducts';
import { useDispatch, useSelector } from "react-redux";
import {retrieveProducts} from "./actions/products";

function App() {
  // const [products, setProducts] = useState([]);
  const [isViewTable, setViewTable] = useState(true);
 

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside use effect")
    // loadProducts();
    dispatch(retrieveProducts());
  }, []);

  const viewTable = () => {
    setViewTable(true);

  }
  const viewAddProduct = () => {
    setViewTable(false)

  }
  return (
    <>
      <div className="containerPrincipal">
        <Nav />
        <Header />
        <ContainerProducts
          //  key={product.id}
          viewAddProduct={viewAddProduct}

        ></ContainerProducts>
        {isViewTable &&
          products &&
          <Table
            data={products}
          ></Table>
        }

        {
          !isViewTable &&
          <AddProducts
            viewTable={viewTable}
          />

        }

      </div>
    </>
  )

}

export default App;
