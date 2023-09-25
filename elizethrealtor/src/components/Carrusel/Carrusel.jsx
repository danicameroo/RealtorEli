import { useState } from "react";
import { Realtor } from "../../data";
import Card from "../card/Card";
import next from '../../img/arrownext.svg'
import prev from '../../img/arrowprev.svg'
import './Carrusel.css';
import CardCarr from "../CardCarr/CardCarr";

const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? Realtor.length - 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === Realtor.length - 2 ? 0 : prevSlide + 1));
  };

  const visibleSlides = Realtor.slice(currentSlide, currentSlide + 2);

  return (
    <div className="containerCarr">
      <button onClick={handlePreviousSlide} className="buttonCarr"><img src={prev} alt="" /></button>
      <div className="Carr">
        {visibleSlides.map((item, index) => (
            <div className="conteinerCardCarr">
                <CardCarr key={index} item={item} />
            </div>
        ))}
      </div>
      <button onClick={handleNextSlide}  className="buttonCarr"><img src={next} alt="" /></button>
    </div>
  );
};

export default Carrusel;