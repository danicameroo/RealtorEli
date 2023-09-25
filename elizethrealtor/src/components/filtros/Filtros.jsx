import { useState } from "react";
import { Realtor } from "../../data";
import Card from "../card/Card";
import './Filtros.css'
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Filtros = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [hab, setHab] = useState("");
  const [price, setPrice] = useState("");
  const [visibleImages, setVisibleImages] = useState(8);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 8);
  };

  const checkPriceRange = (price, range) => {
    const [min, max] = range.split(" - ");
    if (range === "Menos de 5000") {
      return price < 5000;
    } else if (range === "Mas de 20000") {
      return price > 20000;
    } else if (min && max) {
      return price >= parseInt(min) && price <= parseInt(max);
    } else if (min) {
      return price >= parseInt(min);
    } else if (max) {
      return price <= parseInt(max);
    }
    return true;
  };
  // Filtrar los elementos según la ubicación seleccionada
  const filteredRealtor = Realtor.filter((item) => {
    const ubicacionFilter = ubicacion ? item.ubicacion === ubicacion : true;
    const tipoFilter = tipo ? item.tipo === tipo : true;
    const tipoHab = hab ? item.habitaciones.toString() === hab : true;
    const priceFilter = price ? checkPriceRange(item.price, price) : true;
    return ubicacionFilter && tipoFilter && tipoHab && priceFilter;
  });

  const [isOpenZero, setIsOpenZero] = useState(isDesktopOrLaptop);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const toggleOpenZero = () => {
    if (!isDesktopOrLaptop) {
      setIsOpenZero(!isOpenZero);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpenTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const toggleOpenThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  const toggleOpenFour = () => {
    setIsOpenFour(!isOpenFour);
  };

  const handleUbiClick = (option) => {
    setUbicacion(option);
    setIsOpen(false);
  }

  const handleTipoClick = (option) => {
    setTipo(option);
    setIsOpenTwo(false);
  }

  const handleHabClick = (option) => {
    setHab(option);
    setIsOpenThree(false);
  }

  const handlePriceClick = (option) => {
    setPrice(option);
    setIsOpenFour(false);
  }
  return (
    <div>
      <div className='contSelctors' >
      <div className="gapSelect">
        <div className= {`contFiltro ${isOpenZero ? 'open' : ''}`} onClick={toggleOpenZero}>
          <p className="titleFiltros">Filtros</p>
        </div>
      {isOpenZero && (
        <div className="containerFiltroBack">
        <div className={`ubiSelctor ${isOpen ? 'open' : ''}`} >
            <div className={`selectedOption ${isOpen ? ' ' : ''}`} onClick={toggleOpen}>
            {ubicacion ? ubicacion : `Ubicacion`}
            </div>
            {isOpen && (
            <ul className="optionSelect">
                <li className="lineaSelect" onClick={() => handleUbiClick('')}>Todos</li>
                <li className="lineaSelect" onClick={() => handleUbiClick('San Diego')}>San Diego</li>
                <li className="lineaSelect"  onClick={() => handleUbiClick('Valencia')}>Valencia</li>
                <li className="lineaSelect"  onClick={() => handleUbiClick('Guacara')}>Guacara</li>
                <li onClick={() => handleUbiClick('Puerto Cabello')}>Puerto Cabello</li>
            </ul>
            )}
        </div>
        <div className={`Selctor ${isOpenTwo ? 'open' : ''}`} >
            <div className={`selectedOptionTwo ${isOpenTwo ? ' ' : ''}`} onClick={toggleOpenTwo}>
            {tipo ? tipo : `Tipo`}
            </div>
            {isOpenTwo && (
            <ul className="optionSelectTwo">
                <li className="lineaSelectTwo" onClick={() => handleTipoClick('')}>Todos</li>
                <li className="lineaSelectTwo" onClick={() => handleTipoClick('Casa')}>Casa</li>
                <li className="lineaSelectTwo"  onClick={() => handleTipoClick('Apartamento')}>Apartamento</li>
                <li onClick={() => handleTipoClick('Local Comercial')}>Local Comercial</li>
            </ul>
            )}
        </div>
        <div className={`Selctor ${isOpenThree ? 'open' : ''}`} >
            <div className={`selectedOptionTwo ${isOpenThree ? ' ' : ''}`} onClick={toggleOpenThree}>
            {hab ? hab : `Habitaciones`}
            </div>
            {isOpenThree && (
            <ul className="optionSelectTwo extension">
                <li className="lineaSelectTwo" onClick={() => handleHabClick('')}>Todos</li>
                <li className="lineaSelectTwo" onClick={() => handleHabClick('1')}>1</li>
                <li className="lineaSelectTwo" onClick={() => handleHabClick('2')}>2</li>
                <li className="lineaSelectTwo"  onClick={() => handleHabClick('3')}>3</li>
                <li className="lineaSelectTwo"  onClick={() => handleHabClick('4')}>4</li>
                <li onClick={() => handleHabClick('5')}>5</li>
            </ul>
            )}
        </div>
        <div className={`Selctor ${isOpenFour ? 'open' : ''}`} >
            <div className={`selectedOptionTwo ${isOpenFour ? ' ' : ''}`} onClick={toggleOpenFour}>
            {price ? price : `Precio`}
            </div>
            {isOpenFour && (
            <ul className="optionSelectTwo extension">
                <li className="lineaSelectTwo" onClick={() => handlePriceClick('')}>Todos</li>
                <li className="lineaSelectTwo" onClick={() => handlePriceClick('Menos de 5000')}>Menos de 5.000</li>
                <li className="lineaSelectTwo" onClick={() => handlePriceClick('5000 - 10000')}>5.000 - 10.000</li>
                <li className="lineaSelectTwo"  onClick={() => handlePriceClick('10000 - 15000')}>10.000 - 15.000</li>
                <li className="lineaSelectTwo"  onClick={() => handlePriceClick('15000 - 20000')}>15.000 - 20.000</li>
                <li onClick={() => handlePriceClick('Mas de 20000')}>Mas de 20.000</li>
            </ul>
            )}
        </div>
      </div>
      )}
      </div>
        <div>
          <Link className='link' to="tel:+584244270337"><button className="buttonFiltro">Contactar</button></Link>
        </div>
      </div>
      <div className="containerCard">
        {filteredRealtor.slice(0, visibleImages).map((item) => (
            <Card key={item.id} ubicacion={ubicacion} item={item} />
        ))}
      </div>
      <div>
        {visibleImages < filteredRealtor.length && (
            <button onClick={loadMoreImages}>Load More</button>
        )}
       </div>
    </div>
  );
};

export default Filtros;