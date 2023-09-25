import { useLocation } from 'react-router-dom';
import './Vender.css'
import { useEffect, useRef } from 'react';

const Vender = () => {
    const location = useLocation();
    const scrollOnLoadVender = new URLSearchParams(location.search).get('Vender') === 'true';
    const venderRef = useRef(null);

    useEffect(() => {
        if (scrollOnLoadVender) {
        const scrollToVenderSection = () => {
            if (venderRef.current) {
            venderRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToVenderSection();
        }
    }, [scrollOnLoadVender]);

    return(
        <div className='Vender' ref={venderRef}>
            <div className='contVender'>
                <h1 className='titleVender'>¿QUIERES VENDER O COMPRAR INMUEBLES?</h1>
                <p className='textVender'>!Yo te puedo ayudar!</p>
                <div className='containerButtonVender'>
                    <button className='buttonVender'>Llamar</button>
                    <button className='buttonVender'>WhatsApp</button>
                </div>
            </div>
        </div>
    )
}

export default Vender