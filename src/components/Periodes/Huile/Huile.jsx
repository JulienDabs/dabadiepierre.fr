import React, { useState } from "react";
import "../../Home/home.css";
import { toPascalCase } from "../../Utils/stringUtils";
import GalleryItem from "../../Utils/GalleryItem";
import CloseIcon from "@mui/icons-material/Close";

// Dynamic image imports
const imageNames = [
  "alderney",
  "antilles",
  "bouquet moderne",
  "bouquet",
  "café de nuit",
  "cage tunisienne",
  "caroline",
  "chaise 1ère année",
  "cyprès+lavande",
  "fenetre sur mer",
  "Geza",
  "grèce",
  "hôtel le garoupe.antibes",
  "intérieur rouge matisse",
  "iris",
  "julien",
  "la cadière",
  "La tristesse du Roy",
  "Lavandes",
  "le brusc",
  "mairie sanary",
  "maqueraux",
  "martinique",
  "oliviers",
  "Orangers",
  "Poète du Brusc",
  "Port en Méditerrannée",
  "Rhum",
  "Sanary sur mer",
  "st tropez à l'huile",
  "trompette 1ère année",
  "Tropiques",
  "violon matisse",
  "vitrail",
  "Vue de Tanger",
];


const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`../../../assets/Huile/img/${imgName.replace(/\s/g, " ")}.jpg`);
  return acc;
}, {});



// Huile Component
const Huile = () => {
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
      <h1 className="main-intro">La peinture à l'huile et acrylique</h1>
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

export default Huile;
