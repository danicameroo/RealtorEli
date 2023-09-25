import { useEffect, useRef, useState } from 'react';
import arroLeft from '../../img/arrowLeft.svg'
import arroRight from '../../img/arrowRight.svg'
import ver from '../../img/vertical.svg'
import hor from '../../img/horizontal.svg'
import cama from '../../img/cama.svg'
import bath from '../../img/bath.svg'
import car from '../../img/car.svg'
import arrowCarc from '../../img/arrowCarac.svg'
import './InmuebleID.css'
import Caracteristicas from '../Caracteristicas/Caracteristicas';
import Carrusel from '../Carrusel/Carrusel';
import callCard from '../../img/callCard.svg'
import whatsappCard from '../../img/whatsappCard.svg'
import { Link, useLocation } from 'react-router-dom';

const InmuebleID = ({item}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showCaracteristicas, setShowCaracteristicas] = useState(false);
    const location = useLocation();
    const scrollOnLoadID = new URLSearchParams(location.search).get('ID') === 'true';
    const idRef = useRef(null);

    
    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? item.img.length - 1 : prevImage - 1));
    };
    
    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === item.img.length - 1 ? 0 : prevImage + 1));
    };
    
    const onClick = () => {
        setShowCaracteristicas(!showCaracteristicas);
    };
    
    useEffect(() => {
        if (scrollOnLoadID) {
        const scrollToIDSection = () => {
            if (idRef.current) {
            idRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToIDSection();
        }
    }, [scrollOnLoadID]);

    return(
        <div ref={idRef}>
            <div className='contImgCarr'>
                <img className="imgArrowID" src={arroLeft} alt="" onClick={previousImage} />
                <img className="imgID" src={item.img[currentImage]} alt="" />
                <img className="imgArrowID" src={arroRight} alt="" onClick={nextImage}/>
            </div>
            <div className='containerTitleID'>
                <div>
                    <h2 className='priceID'>{item.price}$</h2>
                    <h1 className='titleID'>{item.title}</h1>
                </div>
                <div className='containerButton'>
                    <Link className='link' to="tel:+584244270337">
                        <button className='buttonID'><img src={callCard} alt="" /></button>
                    </Link>
                    <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                        <button className='buttonID'><img src={whatsappCard} alt="" /></button>
                    </Link>
                    <Link to='https://api.whatsapp.com/send/?phone=584244270337&text&type=phone_number&app_absent=0' className='link' target="_blank">
                        <button className='buttonID rec'><p className='textButtonID'>Contactar</p></button>
                    </Link>
                </div>
            </div>
            <div className='contItemsID'>
                <div className='itemsCardID'>
                    <img className='imgCaracCardID' src={ver} alt="" />
                    <p className='caracCardID'>{item.metrosUno}m²</p>
                </div>
                <div className='itemsCardID'>
                    <img className='imgCaracCardID' src={hor} alt="" />
                    <p className='caracCardID'>{item.metrosDos}m²</p>
                </div>
                <div className='itemsCardID'>
                    <img className='imgCaracCardID' src={cama} alt="" />
                    <p className='caracCardID'>{item.habitaciones} Habitacion</p>
                </div>
                <div className='itemsCardID'>
                    <img className='imgCaracCardID' src={bath} alt="" />
                    <p className='caracCardID'>{item.banos} Baños</p>
                </div>
                <div className='itemsCardID'>
                    <img className='imgCaracCardID' src={car} alt="" />
                    <p className='caracCardID'>{item.estac} Estacionamiento</p>
                </div>
            </div>
            <div className='containerUbiText'>
                <div>
                    <div className='containerUbi'>
                        <p className='ubiText'>{item.ubi}</p>
                    </div>
                    <div className='containerCaract'>
                        <ul className='listCaract'>
                            {item.caracteristicas.map((item) =>(
                                <li className='textListCaract'>- {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='frameUbi'>
                    <iframe className='ubicacionID' title='ubicacion' target="_blank" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.44424144947!2d-67.97228242512404!3d10.225709269110602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d3b79ec421b%3A0x2292556f1ff46689!2sMadagaskar!5e0!3m2!1ses-419!2sve!4v1687455621371!5m2!1ses-419!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div>
                <button className='buttonVer' onClick={onClick}>Ver detalles <img className='arrowCarac' src={arrowCarc} alt="" /></button>
                {showCaracteristicas && <Caracteristicas />}
            </div>
            <div>
                <h2 className='titleCarr'>Inmuebles en la misma zona</h2>
                <Carrusel />
            </div>
        </div>
    )
}

export default InmuebleID