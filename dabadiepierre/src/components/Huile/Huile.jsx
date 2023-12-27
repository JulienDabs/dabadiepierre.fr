import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";

// Dynamic image imports
const imageNames = [
  "alderney", "antilles", "bouquet moderne", "bouquet", "café de nuit", 
  "cage tunisienne", "caroline", "chaise 1 ere année", "cyprès+lavande", 
  "fenetre sur mer", "Geza", "grèce", "hôtel le garoupe.antibes", 
  "interieur rouge matisse", "iris", "julien", "la cadière", 
  "La tristesse du Roy", "Lavandes", "le brusc", "mairie sanary", 
  "maqueraux", "martinique", "oliviers", "oranges très orange", 
  "Poet duBrusc", "Port en Méditerrannée", "Rhum", "Sanary sur mer", 
  "st tropez à l'huile", "trompette 1 ere année", "Tropiques", 
  "violon matisse", "vitrail", "Vue de Tanger"
];

const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`./img/${imgName.replace(/\s/g, ' ')}.jpg`);
  return acc;
}, {});

// GalleryItem Component
const GalleryItem = ({ imgName, alt, onClick }) => (
  <div className="pics" onClick={onClick}>
  <img className="picture-style" src={images[imgName]} loading="lazy" style={{ width: "100%" }} alt={alt} />
  <p className="alt-text">{alt}</p>
</div>
);

// Huile Component
const Huile = () => {
  const [model, setModel] = useState({ isOpen: false, imgSrc: "", imgAlt: "" });

  const getImg = (imgName, alt) => {
    setModel({ isOpen: true, imgSrc: images[imgName], imgAlt: alt });
  };

  let data = imageNames.map((name, index) => ({
    id: index + 1,
    imgName: name,
    alt: name.replace(/_/g, ' ')  // Replace underscores with spaces for alt text
  }));

  return (
    <>
      <h1 className="main-intro">La peinture à l'huile et acrylique</h1>
      <div className={model.isOpen ? "model open" : "model"}>
        <img src={model.imgSrc} alt={model.imgAlt} />
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
          />
        ))}
      </div>
    </>
  );
};

export default Huile;
