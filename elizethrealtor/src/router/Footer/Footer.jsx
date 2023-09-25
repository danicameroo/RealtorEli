import './Footer.css'
import callFoot from '../../img/callFoot.svg'
import whatsappFoot from '../../img/whatsappFoot.svg'
import facebookFoot from '../../img/facebookFoot.svg'
import instagramFoot from '../../img/instagramFoot.svg'
import emailFoot from '../../img/emailFoot.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className='backFooter'>
            <div className="Footer"> 
                <div>
                    <ul className='fotList'>
                        <Link className='link' to={'/?Comprar=true'}><li className='fotSecc'>Comprar</li></Link>
                        <Link className='link' to={'/quiensoy/?Vender=true'}><li className='fotSecc'>Vender</li></Link>
                        <Link className='link' to={'/quiensoy/?Quien=true'}><li className='fotSecc'>¿Quién soy?</li></Link>
                    </ul>
                </div>
                <div>
                    <ul className='fotList'>
                        <Link className='link' to="tel:+584244270337"><li className='fotSecc'>Llamar</li></Link>
                        <li className='fotSecc'>WhatsApp</li>
                        <li className='fotSecc'>Correo Electronico</li>
                    </ul>
                </div>
                <div>
                    <ul className='fotList'>
                        <li className='fotSecc'>Instagram</li>
                        <li className='fotSecc'>Facebook</li>
                        <li className='fotSecc'>Contactar</li>
                    </ul>
                </div>
                <div className="containerInfo">
                    <div>
                        <h2 className='titleFotEli'>Elizeth Belzares</h2>
                        <h2 className='textFotEli'>Asesor inmobiliario</h2>
                    </div>
                    <div className='contButtonFooter'>
                        <Link className='link' to="tel:+584244270337">
                            <button className='buttonFooter'><img className='iconFoot' src={callFoot} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonFooter'><img className='iconFoot' src={whatsappFoot} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonFooter'><img className='iconFoot' src={facebookFoot} alt="" /></button>
                        </Link>
                        <Link to='https://www.instagram.com/realtor_elibelzares/' className='link' target="_blank">
                            <button className='buttonFooter'><img className='iconFoot' src={instagramFoot} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonFooter'><img className='iconFoot' src={emailFoot} alt="" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer