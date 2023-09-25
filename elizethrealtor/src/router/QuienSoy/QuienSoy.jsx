import { useLocation } from "react-router-dom"
import Carrusel from "../../components/Carrusel/Carrusel"
import Start from "../../components/Start/Start"
import Vender from "../../components/vender/Vender"
import './QuienSoy.css'
import { useEffect, useRef } from "react"

const QuienSoy = () => {
    const location = useLocation();
    const scrollOnLoadQuien = new URLSearchParams(location.search).get('Quien') === 'true';
    const quienRef = useRef(null);

    useEffect(() => {
        if (scrollOnLoadQuien) {
        const scrollToQuienSection = () => {
            if (quienRef.current) {
            quienRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToQuienSection();
        }
    }, [scrollOnLoadQuien]);

    return(
        <div ref={quienRef}>
            <Start />
            <div className="contCarrQuienSoy">
                <h1 className="textCarrQuienSoy">INMUEBLES EN VENTA Y ALQUILER</h1>
                <Carrusel />
                <button className="buttonQuienSoy">Ver mas inmuebles</button>
            </div>
            <Vender />
        </div>
    )
}

export default QuienSoy