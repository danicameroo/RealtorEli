import { Link } from 'react-router-dom'
import ver from '../../img/vertical.svg'
import hor from '../../img/horizontal.svg'
import cama from '../../img/cama.svg'
import bath from '../../img/bath.svg'
import car from '../../img/car.svg'
import callCard from '../../img/callCard.svg'
import whatsappCard from '../../img/whatsappCard.svg'
import './Card.css'

const Card = ({item}) => {
    return(
        <div className='Card'>
            <div className='containerImg'>
                <Link className='link' to={`/inmueble/${item.id}?ID=true`}><img className="imgCard" src={item.img[0]} alt="" /></Link>
            </div>
            <div className='textCard'>
                <Link className='link' to={`/inmueble/${item.id}?ID=true`}><div>
                    <h2 className='titleCard'>{item.title}</h2>
                    <div className='contItems'>
                        <div className='itemsCard'>
                            <img className='imgCaracCard' src={ver} alt="" />
                            <p className='caracCard'>{item.metrosUno}m²</p>
                        </div>
                        <div className='itemsCard'>
                            <img className='imgCaracCard' src={hor} alt="" />
                            <p className='caracCard'>{item.metrosDos}m²</p>
                        </div>
                        <div className='itemsCard'>
                            <img className='imgCaracCard' src={cama} alt="" />
                            <p className='caracCard'>{item.habitaciones} hab.</p>
                        </div>
                        <div className='itemsCard'>
                            <img className='imgCaracCard' src={bath} alt="" />
                            <p className='caracCard'>{item.banos} baños</p>
                        </div>
                        <div className='itemsCard'>
                            <img className='imgCaracCard' src={car} alt="" />
                            <p className='caracCard'>{item.estac} estac.</p>
                        </div>
                    </div>
                    <p className='descCard'>{item.desc}</p>
                </div></Link>
                <div className='containerTwo'>
                    <h2 className='priceCard'>{item.price}$</h2>
                    <div className='contButtonCard'>
                        <Link className='link' to="tel:+584244270337">
                            <button className='buttonCard'><img className='iconCard' src={callCard} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonCard'><img className='iconCard' src={whatsappCard} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonCard extenButton'><p className='textButtonCard'>Contactar</p></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card