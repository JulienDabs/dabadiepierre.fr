import Affiche from "../../assets/Actu/Affiche.png";
import Presse from "../../assets/Actu/Actu-St-Mandrier.png";
import "./actualite.css";

const Actu = () => {
  return (
    <>
      <div className="container">
        <h1>Suivez l'actualité de Pierre Dabadie</h1>

        <h3>Exposition à la Galerie Rancilio (St-Mandrier)</h3>
        <h4>Du 8 novembre au 1er décembre 2024</h4>

        <img
          src={Affiche}
          alt="Affiche St Mandrier Pierre Dabadie"
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
