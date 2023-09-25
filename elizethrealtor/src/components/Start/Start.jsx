import fotoEli from '../../img/fotoEli.jpg'
import callCard from '../../img/callCard.svg'
import whatsappCard from '../../img/whatsappCard.svg'
import './Start.css'
import { Link } from 'react-router-dom'

const Start = () => {
    return(
        <div>
            <div className="backgroundStart"></div>
            <div className='containerInfoStart'>
                <div className='containerImgStart'>
                    <img className='imgStart' src={fotoEli} alt="" />
                </div>
                <div>
                    <h2 className='titleEslogan'>¿BUSCAS EL HOGAR DE TUS SUEÑOS?</h2>
                    <p className='textEslogan'>Me enfoco en ofrecerte soluciones inmobiliarias</p>
                    <div className='contButtonStart'>
                        <button className='buttonStart extendButtonStart'><p className='textButtonStart'>Contactar</p></button>
                        <Link className='link' to="tel:+584244270337"><button className='buttonStart'><img src={callCard} alt="" /></button></Link>
                        <button className='buttonStart'><img src={whatsappCard} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start