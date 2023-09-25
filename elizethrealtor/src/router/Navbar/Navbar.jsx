import { Link } from "react-router-dom"
import callNav from '../../img/callNav.svg'
import whatsappNav from '../../img/whatsappNav.svg'
import facebookNav from '../../img/facebookNav.svg'
import './Navbar.css'

const Navbar = () =>{
    return(
        <div className="NavBar">
            <div className="logoNav">
                <h2 className="titleNav">Elizeth Belzares</h2>
                <p className="esloganNav">Asesor inmobiliario</p>
            </div>
            <div className="seccionesContNav">
                <ul className="seccionesNav">
                    <Link to={'/'} className="link"><li className="seccNav">Comprar</li></Link>
                    <Link to={'/quiensoy/?Vender=true'} className="link"><li className="seccNav">Vender</li></Link>
                    <Link to={'/quiensoy'} className="link"><li className="seccNav">¿Quién soy?</li></Link>
                </ul>
            </div>
            <div className="containerButtonNav">
                <Link className='link' to="tel:+584244270337">
                    <button className="buttonNav"><img className="iconoNav" src={callNav} alt="" /></button>
                </Link>
                <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                    <button className="buttonNav"><img className="iconoNav" src={whatsappNav} alt="" /></button>
                </Link>
                <Link className='link' to="">
                    <button className="buttonNav"><img className="iconoNav" src={facebookNav} alt="" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar