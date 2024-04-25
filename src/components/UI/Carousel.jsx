import React, { useState } from "react";
import "./Carousel.css"; // Make sure to create this CSS file
import leBrusc from "../../assets/leBrusc.jpg";
import tokyo from "../../assets/tokyo.jpg";
import cuba from "../../assets/cuba.jpg";
import PBrusc from "../Home/img/Le_Port_du_Brusc.jpg";
import MtSalva from "../Home/img/Mont_SALVA.jpg";
import NYC from "../Home/img/NY_at_night.jpg";
import Vespa from "../Home/img/Vespa.jpg";
const images = [leBrusc, tokyo, cuba, PBrusc, MtSalva, NYC, Vespa];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious} className="prev-button">
        &lt;
      </button>
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt="Carousel slide"
          className="carousel-image"
        />
      </div>
      <button onClick={goToNext} className="next-button">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
