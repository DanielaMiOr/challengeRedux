import {AiOutlineEye} from 'react-icons/ai';
import{GrFormClose} from 'react-icons/gr';
import React from 'react';
import '../CSS/Minimodal.css';

function Minimodal(){
console.log("se esta llamando al modal")
    return(
        <div className="containerMiniModal">
            <button className="iconModalEye"><AiOutlineEye /> Ver detalle</button>
            <button className="iconModalClose"><GrFormClose /></button>
        </div>
    )
}
export default Minimodal;