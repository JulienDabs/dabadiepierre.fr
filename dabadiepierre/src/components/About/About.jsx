import React from 'react';
import Img1 from "./img/bio pic.jpg";
import "./about.css";

const Bio = () => {
  return (
    <div className='bio'>
      <div className='bio-intro'>
      <h1 className='bio-intro-title'>Pierre Dabadie</h1>
      <p>Pierre Dabadie était un peintre français connu pour ses paysages colorés et vifs et ses peintures de nature morte. Il est né à Alger, Algérie au début du XXe siècle et a étudié l'art à l'École des Beaux-Arts de Paris. Tout au long de sa carrière, Dabadie s'est inspiré de la beauté du monde naturel et a souvent cherché à capturer la majesté de la campagne française dans ses peintures.</p>
      <p>Le style de Dabadie se caractérise par son utilisation de couleurs vives et audacieuses et sa capacité à transmettre un sens du mouvement et de la vie dans ses peintures. Il utilisait souvent des coups de pinceau épais et un style impressionniste souple pour transmettre l'énergie et le mouvement du monde naturel. Parmi ses œuvres les plus célèbres figurent "Printemps en Provence", "Paysage d'Auvergne" et "Nature morte aux fleurs".</p>

      <p>Aujourd'hui, les peintures de Dabadie sont très recherchées par les collectionneurs d'art et les passionnés, et ses œuvres peuvent être trouvées dans des musées dans le monde entier.</p>
      </div>
      <img id='bio-pic' src={Img1} alt="Bio Pic" />
      </div>
  );
};

export default Bio;
