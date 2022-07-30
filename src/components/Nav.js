import '../CSS/Nav.css';
function Nav(){
    return(
<div className="containerNav">
<ul>
  <li><a  href="#home">
  <img
                className="logoPerfil"
                src={require("../img/nav.png")}
                alt="imgnav"
                /> </a></li>
  
</ul>

</div>
)
}
export default Nav;