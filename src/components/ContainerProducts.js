import {AiOutlineLeft, AiOutlineApartment,AiOutlinePlus, AiOutlineDown} from 'react-icons/ai';
import '../CSS/ContainerProducts.css';
function ContainerProducts(props){
const {viewAddProduct}= props;
    return(
        <div className="boxBtns">
           <p  className="productParagraph"><AiOutlineLeft className="LessThan"/> Productos especializados </p>
           <div className="containerButtonsMenu">   
            <button className="btnActivate"> <AiOutlineApartment className="iconMax"/>Acciones masivas  <AiOutlineDown className="iconDown"/> </button>
            <button className="loadBtn" onClick={viewAddProduct}><AiOutlinePlus className="iconPlus"/> Cargar Producto </button>
            </div>
        </div>
    )
}
export default ContainerProducts;