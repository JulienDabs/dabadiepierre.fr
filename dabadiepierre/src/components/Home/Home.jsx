import React, { useState } from "react";
import "./home.css";
import CloseIcon from "@mui/icons-material/Close";

// Dynamic image imports
const imageNames = [
  "baie des anges", "Le Port du Brusc", "Main d'Enfant", "Mont SALVA", 
  "Mont Tremblant", "NY at night", "Ousins et Citrons", "Rhum", "Vespa"
];

const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`./img/${imgName.replace(/\s/g, '_')}.jpg`);
  return acc;
}, {});

// GalleryItem Component
const GalleryItem = ({ imgName, alt, onClick }) => (
  <div className="pics" onClick={onClick}>
    <img className="picture-style" src={images[imgName]} loading="lazy" style={{ width: "100%" }} alt={alt} />
    <p className="alt-text">{alt}</p>
  </div>
);

// Home Component
const Home = () => {
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
      <div className="main-intro">
        <h1 className="main-intro-title">Pierre Dabadie</h1>
        <h2>Artiste Peintre</h2>
        <h3>Une évolution au fil du temps</h3>
      </div>
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

export default Home;
