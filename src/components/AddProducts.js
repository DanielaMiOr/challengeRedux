import { FiChevronLeft } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import '../CSS/AddProducts.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createProduct } from "../actions/products";

function AddProducts(props) {
    const { viewTable } = props;
    const [nameProduct, setNameProduct] = useState("");
    const [skuSimple, setSkuSimple] = useState("");
    const [sku, setSku] = useState("");
    const [upc, setUpc] = useState("");
    const [price, setPrice] = useState("");
    const [stateProduct, setStateProduct] = useState("");
    const dispatch = useDispatch();

    const nameProductInput = (event) => {
        setNameProduct(event.target.value)
    }
    const skuSimpleProduct = (event) => {
        setSkuSimple(event.target.value)
    }
    const skuProductInput = (event) => {
        setSku(event.target.value)
    }
    const upcProduct = (event) => {
        setUpc(event.target.value)
    }
    const priceProduct = (event) => {
        setPrice(event.target.value)
    }
    const stateProductInput =(event)=> {
        setStateProduct(event.target.value)
         }


         const saveInfo =()=>{
            let product = {
                "simple_sku":skuSimple,
                "sku":sku,
                "upc": upc,
                "product_name": nameProduct,
                "price": price,
                "created_at": new Date().toISOString(),
                "enable": stateProduct,

             };
            console.log(product)
            dispatch(createProduct(product))
            .then(data => {
            //   setTutorial({
            //     id: data.id,
            //     title: data.title,
            //     description: data.description,
            //     published: data.published
            //   });
      
              console.log(data);
            })
            .catch(e => {
              console.log(e);
            });
         }
         
    return (
        <div className="addContainer">

            <p> <FiChevronLeft />Cargar Producto</p>
            <section className="boxAddInfo">
                <p className="pData">Datos del producto</p>
                <p className="pAdd">Nombre del producto</p>
                <input
                    className="inputAddData"
                    placeholder="Escribe el nombre del producto"
                    type="text"
                    onChange={nameProductInput}

                />
                <p className="pAdd">SKU simple</p>
                <input
                    className="inputAddData"
                    placeholder="Escribe el sku simple del producto"
                    type="text"
                    onChange={skuSimpleProduct}

                />
                <p className="pAdd">Sku</p>
                <input
                    className="inputAddData"
                    placeholder="Escribe el sku del producto"
                    type="text"
                    onChange={skuProductInput}

                />
                <p className="pAdd">UPC</p>
                <input
                    className="inputAddData"
                    placeholder="Escribe el código UPC del producto"
                    type="text"
                    onChange={upcProduct}

                />
                <p className="pAdd">Precio del producto</p>
                <input
                    className="inputAddData"
                    placeholder="Asigna un precio al producto"
                    type="text"
                    onChange={priceProduct}
                />
                <p className="pAdd">Estado</p>
                <select className="list" onChange={stateProductInput}>
                    <option selected>Selecciona un estado para el producto</option>
                    <option>Publicado</option>

                    <option>Pendiente</option>

                    <option>Retrasado</option>
                </select>
            </section>
            <section className="btns">
                <button className="btnCancelar" onClick={viewTable}> Cancelar</button>
                <section className="containerBtnsLoad">
                    <button className="btnSave" onClick={saveInfo}>Guardar y Salir</button>
                    <button className="btnLoadProduct"><AiOutlinePlus /> Cargar producto</button>
                </section>
            </section>
        </div>

    )
}
export default AddProducts;