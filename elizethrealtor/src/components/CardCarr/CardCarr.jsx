import { Link } from 'react-router-dom'
import ver from '../../img/vertical.svg'
import hor from '../../img/horizontal.svg'
import cama from '../../img/cama.svg'
import bath from '../../img/bath.svg'
import car from '../../img/car.svg'
import callCard from '../../img/callCard.svg'
import whatsappCard from '../../img/whatsappCard.svg'
import './CardCarr.css'

const CardCarr = ({item}) => {
    return(
       <div className='CardCarr'>
            <div className='containerImgCarr'>
                <Link className='link' to={`/inmueble/${item.id}?ID=true`}><img className="imgCardCarr" src={item.img[0]} alt="" /></Link>
            </div>
            <div className='textCardCarr'>
                <Link className='link' to={`/inmueble/${item.id}?ID=true`}><div>
                    <h2 className='titleCardCarr'>{item.title}</h2>
                    <div className='contItemsCarr'>
                        <div className='itemsCardCarr'>
                            <img className='imgCaracCardCarr' src={ver} alt="" />
                            <p className='caracCardCarr'>{item.metrosUno}m²</p>
                        </div>
                        <div className='itemsCardCarr'>
                            <img className='imgCaracCardCarr' src={hor} alt="" />
                            <p className='caracCardCarr'>{item.metrosDos}m²</p>
                        </div>
                        <div className='itemsCardCarr'>
                            <img className='imgCaracCardCarr' src={cama} alt="" />
                            <p className='caracCardCarr'>{item.habitaciones} hab.</p>
                        </div>
                        <div className='itemsCardCarr'>
                            <img className='imgCaracCardCarr' src={bath} alt="" />
                            <p className='caracCardCarr'>{item.banos} baños</p>
                        </div>
                        <div className='itemsCardCarr'>
                            <img className='imgCaracCardCarr' src={car} alt="" />
                            <p className='caracCardCarr'>{item.estac} estac.</p>
                        </div>
                    </div>
                    <p className='descCardCarr'>{item.desc}</p>
                </div></Link>
                <div className='containerTwoCarr'>
                    <h2 className='priceCardCarr'>{item.price}$</h2>
                    <div className='contButtonCardCarr'>
                        <Link className='link' to="tel:+584244270337">
                            <button className='buttonCardCarr'><img className='iconCardCarr' src={callCard} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonCardCarr'><img className='iconCardCarr' src={whatsappCard} alt="" /></button>
                        </Link>
                        <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                            <button className='buttonCardCarr extenButtonCarr'><p className='textButtonCardCarr'>Contactar</p></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCarr