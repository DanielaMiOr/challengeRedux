import {FiChevronLeft} from 'react-icons/fi';
import {AiOutlinePlus} from 'react-icons/ai';
import '../CSS/AddProducts.css';

function AddProducts(){
    return(
<div className="addContainer">
    
    <p> <FiChevronLeft/>Cargar Producto</p>
    <section className="boxAddInfo">
        <p className="pData">Datos del producto</p>
        <p className="pAdd">Nombre del producto</p>
        <input
        className="inputAddData"
        placeholder= "Escribe el nombre del producto"
            type="text"
            />
        <p className="pAdd">SKU simple</p>
        <input
        className="inputAddData"
        placeholder= "Escribe el sku simple del producto"
            type="text"
            />
        <p className="pAdd">Sku</p>
        <input
        className="inputAddData"
        placeholder= "Escribe el sku del producto"
            type="text"
            />
        <p className="pAdd">UPC</p>
        <input
        className="inputAddData"
        placeholder= "Escribe el código UPC del producto"
            type="text"
            />
        <p className="pAdd">Precio del producto</p>
        <input
        className="inputAddData"
        placeholder= "Asigna un precio al producto"
            type="text"
            />
        <p className="pAdd">Estado</p>
        <select className="list">
        <option selected>Selecciona un estado para el producto</option> 
        <option>Publicado</option>

        <option>Pendiente</option>

        <option>Retrasado</option>   
        </select>
    </section>
    <section className="btns">
    <button className="btnCancelar"> Cancelar</button>
    <button className="btnSave">Guardar y Salir</button>
    <button className="btnLoadProduct"><AiOutlinePlus/> Cargar producto</button>
    </section>
</div>

    )
}
export default AddProducts;