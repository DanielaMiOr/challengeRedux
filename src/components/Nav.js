import '../CSS/Nav.css';
import { BsBoxSeam, BsBell } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
function Nav() {
  return (
    <div className="containerNav">
      <ul>

        <li><a href="#home">
          <img
            className="logoPerfil"
            src={require("../img/logo.png")}
            alt="imgnav"
          /> </a><BiHomeAlt className="iconNav homeIcon" /></li>
        <li></li>
        <li> <BsBoxSeam className="iconNav boxIcon" /></li>
        <li><BsBell  className="iconNav"/></li>
        <li><AiOutlineSetting className="iconNav" /> </li>



      </ul>

    </div>
  )
}
export default Nav;