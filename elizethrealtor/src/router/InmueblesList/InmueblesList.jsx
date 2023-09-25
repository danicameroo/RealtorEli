import { useLocation } from 'react-router-dom';
import Filtros from '../../components/filtros/Filtros'
import './InmueblesList.css'
import { useEffect, useRef } from 'react';


const InmueblesList = () => {
    const location = useLocation();
    const scrollOnLoadComprar = new URLSearchParams(location.search).get('Comprar') === 'true';
    const comprarRef = useRef(null);

    useEffect(() => {
        if (scrollOnLoadComprar) {
        const scrollToComprarSection = () => {
            if (comprarRef.current) {
            comprarRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToComprarSection();
        }
    }, [scrollOnLoadComprar]);

    return(
        <div ref={comprarRef}>
            <h1 className='titleInmueblesList'>INMUEBLES EN VENTA Y ALQUILER</h1>
            <Filtros />
        </div>
    )
}
export default InmueblesList