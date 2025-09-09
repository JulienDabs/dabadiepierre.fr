import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import leBrusc from "../../assets/leBrusc.jpg";
import tokyo from "../../assets/tokyo.jpg";
import cuba from "../../assets/cuba.jpg";
import PBrusc from "../Home/img/Le_Port_du_Brusc.jpg";
import MtSalva from "../Home/img/Mont_SALVA.jpg";
import NYC from "../Home/img/NY_at_night.jpg";
import Vespa from "../Home/img/Vespa.jpg";
import Canadairs from "../../assets/Today/img/Canadairs.jpg";
import Corsica from "../../assets/Today/img/Corsica_Italia.jpg";
import Cocktail from "../../assets/Today/img/Cafetière et Cocktail avec cerises.jpg";
import Marseille from "../../assets/Today/img/Vue de Marseille d'après Nicolas de Staël.jpg";
import FemmeADC from "../../assets/Today/img/Femme Art Déco.jpg";
import Hokusai from "../../assets/Today/img/Grande Vague Hokusai.jpg";

const images = [Hokusai, Cocktail, Marseille, leBrusc, tokyo, cuba, PBrusc, MtSalva, NYC, Vespa, Canadairs, Corsica, FemmeADC];

const AUTOPLAY_MS = 4000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [entering, setEntering] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [ratioClass, setRatioClass] = useState("ratio-landscape");
  const pausedRef = useRef(false);

  const goTo = (next) => {
    if (index === ((next + images.length) % images.length)) return;
    setPrevIndex(index);
    setEntering(true);
    setExiting(false);
    setIndex((next + images.length) % images.length);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Trigger fade in/out after mount
  useEffect(() => {
    if (prevIndex !== null) {
      requestAnimationFrame(() => {
        setExiting(true);
        setEntering(false);
      });
    }
  }, [prevIndex]);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => !pausedRef.current && next(), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index]);

  // preload all images on mount for smooth transitions
  useEffect(() => {
    images.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  // set stage ratio based on the active image’s intrinsic size
  const handleLoad = (e) => {
    const img = e.currentTarget;
    const { naturalWidth: w, naturalHeight: h } = img;
    if (!w || !h) return;
    const r = w / h;
    if (r > 1.1) setRatioClass("ratio-landscape");
    else if (r < 0.9) setRatioClass("ratio-portrait");
    else setRatioClass("ratio-square");
  };

  return (
    <div
      className="carousel-container contain-mode"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <button className="prev-button" onClick={prev} aria-label="Previous slide">‹</button>

      <div className={`carousel-stage ${ratioClass}`}>
        {/* Active (fades in) */}
        <img
          key={`active-${index}`}
          src={images[index]}
          alt={`Slide ${index + 1} of ${images.length}`}
          className={`slide is-active ${entering ? "entering" : ""}`}
          onLoad={handleLoad}
          decoding="async"
          draggable={false}
        />
        {/* Previous (fades out) */}
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex]}
            alt=""
            aria-hidden="true"
            className={`slide is-prev ${exiting ? "exiting" : ""}`}
            onTransitionEnd={() => {
              setPrevIndex(null);
              setExiting(false);
            }}
            decoding="async"
            draggable={false}
          />
        )}
      </div>

      <button className="next-button" onClick={next} aria-label="Next slide">›</button>
    </div>
  );
}