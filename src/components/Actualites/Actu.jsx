import Affiche from "../../assets/Actu/Affiche.png";
import Presse from "../../assets/Actu/Actu-St-Mandrier.png";
import PresseSixFours from "../../assets/Actu/Presse Six-Fours.jpg";
import AfficheSixFrours from "../../assets/Actu/Affiche Six Fours.jpg";
import "./actualite.css";

const Actu = () => {
  return (
    <>
      <div className="container">
        <h1>Suivez les actualités de Pierre Dabadie</h1>

        
        <h3>Exposition Espace Jules de Greling (Six-Fours-Les-Plages)</h3>
        <h4>Du 3 au 18 mai 2025</h4>

        <img
          src={AfficheSixFrours}
          alt="Affiche Expo Six Fours Pierre Dabadie Artiste Peintre"
          className="img"
        />

        <h4>Rencontres Printanières</h4>
        <p>
          Du 3 au 18 mai, l’Espace de Greling à Six‑Fours‑les‑Plages réunit
          l’hyperréalisme aérien de Pierre Dabadie et les sculptures organiques
          d’André Mercheyer. Dabadie crée ses œuvres en peinture au pistolet,
          tandis que Mercheyer laisse le bois dicter sa forme sur le tour.
          Entrée libre – vernissage vendredi 2 mai à 18 h 00.
        </p>

         <h4>Ce que la presse en dit</h4>
        <img
          src={PresseSixFours}
          alt="coupure de presse exposition Six-Fours Pierre Dabadie"
          className="img"
        />

        <h3>Exposition à la Galerie Rancilio (St-Mandrier)</h3>
        <h4>Du 8 novembre au 1er décembre 2024</h4>

        <img
          src={Affiche}
          alt="Affiche Expo St Mandrier Pierre Dabadie Artiste Peintre"
          className="img"
        />

        <h4>L'aérographie : fusion de technique et de créativité</h4>
        <p>
          Pierre Dabadie utilise l'aérographe pour créer des pièces d'une
          précision et d'une finesse inégalées. Ses œuvres se caractérisent par
          des dégradés subtils, des textures riches et une profondeur visuelle
          qui captivent le spectateur.
        </p>

        <h4>Ce que la presse en dit</h4>
        <img
          src={Presse}
          alt="coupure de presse exposition St-Mandrier Pierre Dabadie"
          className="img"
        />
      </div>
    </>
  );
};

export default Actu;
