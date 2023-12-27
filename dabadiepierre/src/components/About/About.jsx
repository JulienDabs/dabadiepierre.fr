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
      <p>Mouvement : hyper-réalisme</p>
      <p>Influences : Edward Hopper & David Hockney</p>
      <p>Technique : aérographe</p>
      <p>Adresse email : <a href="mailto:contact@pierredabadie.fr">contact@pierredabadie.fr</a></p>
      <p>Site web : <a href="https://www.pierredabadie.fr">www.pierredabadie.fr</a></p>
      <br />
      <p>Très tôt, il a montré une aptitude pour le dessin, puis s'est tourné vers la peinture à l'huile, ensuite à l'acrylique, passant du pinceau au rouleau, puis enfin à l'aérographe.</p>
      <p>Il a exercé son art sur divers supports, allant des toiles aux casques de motos et de vélos, en passant par les murs, où la couleur prédomine avec un rendu parfait des ombres et des lumières.</p>
      <p>Après avoir participé à deux expositions et remporté plusieurs concours de peinture, dont un premier prix à La Seyne-sur-Mer, il prépare actuellement de futurs projets pour des salons d'arts, des concours et d'autres lieux d'exposition artistique dans le Var.</p>
      </div>
      <img id='bio-pic' src={Img1} alt="Bio Pic" />
      </div>
      </>
  );
};

export default Bio;
