import React from 'react';
import Img1 from "./img/bio pic.jpg";
import "./about.css";

const Bio = () => {
  return (
    <>
    <div className='bio'>
      <div className='bio-intro'>
      <h1 className='bio-intro-title'>Pierre Dabadie</h1>
      <p>Pierre DABADIE est un peintre français née à Alger en 1951</p>
      <p>Formation : Autodidacte</p>
      <p>Influences : Edward Hopper & David Hockney</p><br />
      <p>Très tôt, il montre une aptitude pour le dessin, la peinture à l'huile par la suite l'acrylique, du pinçeau au rouleau et enfin au pistolet d'aérographe.</p>
      <p>Il exerce son art sur tous supports en passant par les toiles puis casques de motos, vélos, murs où la couleur prime avec un parfait rendu des ombres et lumières.</p>
      <p>Après 2 expositions et plusieurs concours de peinture (dont un premier prix à la Seyne/mer), de futurs projets sont en préparation pour les salons d'arts, concours et autres lieux d'art expo dans le Var.</p>
      </div>
      <img id='bio-pic' src={Img1} alt="Bio Pic" />
      </div>
      </>
  );
};

export default Bio;
