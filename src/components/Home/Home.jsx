import React from "react";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import leBrusc from "../../assets/leBrusc.jpg";
// import tokyo from "../../assets/tokyo.jpg";
// import cuba from "../../assets/cuba.jpg";
// import PBrusc from "./img/Le_Port_du_Brusc.jpg";
// import MtSalva from "./img/Mont_SALVA.jpg";
// import NYC from "./img/NY_at_night.jpg";
// import Vespa from "./img/Vespa.jpg";
import CustomCarousel from "../UI/Carousel";

// Home Component
const Home = () => {
 

  return (
    <>
      <div className="main-intro">
        <h1 className="main-intro-title">Pierre Dabadie</h1>
        <h2>Artiste Peintre</h2>
        <h3>Une évolution au fil du temps</h3>
      </div>
      {/* <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img className="home-img" src={leBrusc} alt="Peinture par Pierre Dabadie capturant la vue pittoresque sur Le Brusc, Six-Fours-les-Plages, avec détails vibrants du paysage côtier." />
            </div>
            <div>
              <img className="home-img" src={tokyo} alt="Oeuvre de Pierre Dabadie illustrant Tokyo de nuit, mettant en lumière les néons éclatants et l'activité urbaine de la capitale japonaise." />
            </div>
            <div>
              <img className="home-img" src={cuba} alt="Tableau de Pierre Dabadie représentant la vie quotidienne à Cuba, avec des scènes vibrantes de rues animées et d'architecture colorée." />
            </div>
            <div>
              <img className="home-img" src={PBrusc} alt= "Création artistique de Pierre Dabadie du port du Brusc, Six-Fours-les-Plages, soulignant les bateaux traditionnels et la sérénité maritime." />
            </div>
            <div>
              <img className="home-img" src={MtSalva} alt="Peinture de Pierre Dabadie du Mont Salva à Six-Fours-les-Plages, offrant une vue majestueuse sur la nature environnante et le paysage méditerranéen." />
            </div>
            <div>
              <img className="home-img" src={NYC} alt="Art de Pierre Dabadie capturant l'essence d'un spectacle à New York City, avec une affiche vibrante reflétant l'énergie et la culture de la ville." />
            </div>
            <div>
              <img className="home-img" src={Vespa} alt="Peinture par Pierre Dabadie d'une Vespa classique, symbolisant l'élégance et le style européen, avec un souci du détail remarquable." />
            </div>
          </Slider>
        </div>
      </div> */}

      <CustomCarousel />
      <p className="description">
        Découvrez l'univers fascinant de Pierre, un artiste peintre dont le
        talent et la créativité traversent les périodes. Sur son site, vous êtes
        invités à entreprendre un voyage visuel unique qui vous mènera à travers
        les différentes étapes marquantes de son parcours artistique. De ses
        premières œuvres, empreintes de recherche et d'expérimentation, jusqu'à
        ses créations actuelles, où se mêlent harmonie des couleurs et audace
        des formes, chaque période révèle une facette de sa vision artistique.
        Laissez-vous guider par la curiosité et venez explorer le monde de
        Pierre, où chaque toile, chaque coup de pinceau, raconte une histoire,
        évoque une émotion, et invite à la réflexion. Son site n'est pas
        seulement une galerie d'art en ligne ; c'est une porte ouverte sur
        l'univers intime et vibrant d'un peintre passionné.
      </p>
    </>
  );
};

export default Home;
