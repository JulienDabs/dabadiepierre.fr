import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";

// Dynamic image imports
const imageNames = [
  "Amazone au perroquet", "Amazone", "Blonde", "Cat Woman", "Coup_de_Soleil",
  "femme à la rose", "Femme au parfum", "Fraise", "Gas Station (2)", "Gas station",
  "Italie", "La Havane", "Le Mont Salva", "Le Port du Brusc", "Mont SALVA (2)",
  "Mont Tremblant", "NY at night", "Pont NY", "Québec Girl", "Royan",
  "Texas", "Vespa", "Gold Cup"
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

// Today Component
const Today = () => {
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
      <h1 className="main-intro">Aujourd'hui</h1>
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

export default Today;
