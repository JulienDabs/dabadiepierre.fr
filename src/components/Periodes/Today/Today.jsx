import React, { useState } from "react";
import "../../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";
import { toPascalCase } from "../../Utils/stringUtils";
import GalleryItem from "../../Utils/GalleryItem";
// Dynamic image imports
const imageNames = [
  "Amazone au perroquet", "Amazone", "Blonde", "Cat Woman", "Coup_de_Soleil",
  "femme à la rose", "Femme au parfum", "Fraise", "Gas Station (2)", "Gas station",
  "Italie", "La Havane", "Le Mont Salva", "Le Port du Brusc", "Mont SALVA (2)",
  "Mont Tremblant", "NY at night", "Pont NY", "Québec Girl", "Royan",
  "Texas", "Vespa", "Gold Cup","Tokyo By Night", "Le Brusc", "Vie à Cuba",
   "Cafetière et Cocktail avec cerises", "Vue de Marseille d'après Nicolas de Staël","Femme Art Déco", 
   "Fraise en cube", "St Mandrier - Vintage", "Art Nouveau 1900", "Grande Vague Hokusai",
];



const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`../../../assets/Today/img/${imgName.replace(/\s/g, ' ')}.jpg`);
  return acc;
}, {});



// Today Component
const Today = () => {
  const [model, setModel] = useState({ isOpen: false, imgSrc: "", imgAlt: "" });

  const getImg = (imgName, alt) => {
    setModel({ isOpen: true, imgSrc: images[imgName], imgAlt: alt });
  };

  let data = imageNames.map((name, index) => ({
    id: index + 1,
    imgName: name,
    alt: toPascalCase(name)  // Replace underscores with spaces for alt text
  }));

  return (
    <>
      <h1 className="main-intro">Aujourd'hui</h1>
      <div className={model.isOpen ? "model open" : "model"}>
        <img src={model.imgSrc} alt={model.imgAlt} style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}/>
        <p className="alt-text-legend">{model.imgAlt}</p>
        <CloseIcon onClick={() => setModel({ isOpen: false, imgSrc: "", imgAlt: "" })} />
      </div>
      <div className="gallery">
        {data.map(item => (
          <GalleryItem
            key={item.id}
            imgName={item.imgName}
            alt={item.alt}
            onClick={() => getImg(item.imgName, item.alt)}
            images={images}
          />
        ))}
      </div>
    </>
  );
};

export default Today;
