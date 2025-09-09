import React, { useState } from "react";
import "../../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";
import { toPascalCase } from "../../Utils/stringUtils";
import GalleryItem from "../../Utils/GalleryItem";
// Dynamic image imports
const imageNames = [
  "café des bains ROYAN",
  "Cannes",
  "Femme Bleue",
  "gerbe d'eau",
  "Main d'Enfant",
  "Piscine",
  "port sanary 1er prix",
  "Sanary",
];



const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`../../../assets/Contemporain/img/${imgName.replace(
    /\s/g,
    "_"
  )}.jpg`);
  return acc;
}, {});



// Contemporain Component
const Contemporain = () => {
  const [model, setModel] = useState({ isOpen: false, imgSrc: "", imgAlt: "" });

  const getImg = (imgName, alt) => {
    setModel({ isOpen: true, imgSrc: images[imgName], imgAlt: alt });
  };

  let data = imageNames.map((name, index) => ({
    id: index + 1,
    imgName: name,
    alt: toPascalCase(name), // Replace underscores with spaces for alt text
  }));

  return (
    <>
      <h1 className="main-intro">Comtemporain</h1>
      <div className={model.isOpen ? "model open" : "model"}>
        <img
          src={model.imgSrc}
          alt={model.imgAlt}
          style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
        />
        <p className="alt-text-legend">{model.imgAlt}</p>
        <CloseIcon
          onClick={() => setModel({ isOpen: false, imgSrc: "", imgAlt: "" })}
        />
      </div>
      <div className="gallery">
        {data.map((item) => (
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

export default Contemporain;
