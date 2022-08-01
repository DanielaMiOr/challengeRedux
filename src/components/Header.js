import React from "react";
import { BiHomeAlt } from 'react-icons/bi';
import '../CSS/Header.css';


function Header() {
  return (
    <div className="containerHeader">
      <div className="containerText">
        <BiHomeAlt className="iconHome" />
        <p className="productsHeader">  / Productos  </p>
        <p className="pSpecial"> / Productos especializados</p>
      </div>
      <div className="containerLogo">
        <p className="pLogo">Southorn Administrator</p>
        <img
          className="logoPerfil"
          src={require("../img/Active.png")}
          alt="imgPerfil"
        />
        <p className="pSouthorn">Southorn</p>
      </div>
    </div>
  )
}

export default Header;