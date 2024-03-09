import React, { useState } from "react";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leBrusc from "../../assets/leBrusc.jpg";
import tokyo from "../../assets/tokyo.jpg";
import cuba from "../../assets/cuba.jpg";

// Home Component
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb"

   
  };

  return (
    <>
      <div className="main-intro">
        <h1 className="main-intro-title">Pierre Dabadie</h1>
        <h2>Artiste Peintre</h2>
        <h3>Une évolution au fil du temps</h3>
        
      </div>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            
            <div>
            <img className="home-img" src={leBrusc} alt="" width="" />
          </div>
          <div>
            <img className="home-img" src={tokyo} alt="" width="" />
          </div>
          <div>
            <img className="home-img" src={cuba} alt="" width="" />
          </div>  
          </Slider>
        </div>
      </div>
      <p className="description">Découvrez l'univers fascinant de Pierre, un artiste peintre dont le talent et la créativité traversent les périodes. Sur son site, vous êtes invités à entreprendre un voyage visuel unique qui vous mènera à travers les différentes étapes marquantes de son parcours artistique. De ses premières œuvres, empreintes de recherche et d'expérimentation, jusqu'à ses créations actuelles, où se mêlent harmonie des couleurs et audace des formes, chaque période révèle une facette de sa vision artistique. Laissez-vous guider par la curiosité et venez explorer le monde de Pierre, où chaque toile, chaque coup de pinceau, raconte une histoire, évoque une émotion, et invite à la réflexion. Son site n'est pas seulement une galerie d'art en ligne ; c'est une porte ouverte sur l'univers intime et vibrant d'un peintre passionné.</p>
    </>
  );
};

export default Home;
