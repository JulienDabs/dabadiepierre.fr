import React, { useState } from "react";
import "../Home/home.css";
import { toPascalCase } from "../Utils/stringUtils";
import GalleryItem from "../Utils/GalleryItem";
import CloseIcon from "@mui/icons-material/Close";

// Dynamic image imports
const imageNames = [
  "caro pop art 2008",
  "coup de soleil",
  "escarpin",
  "glace bleue",
  "lavandes aero",
  "Nu",
  "pubs",
  "royan",
  "st Rémi d'Amherst",
  "Texas",
  "Tomate et Poivrons",
];


const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`../../assets/Aerographe/img/${imgName.replace(
    /\s/g,
    "_"
  )}.jpg`);
  return acc;
}, {});



// Aerographe Component
const Aerographe = () => {
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
      <h1 className="main-intro">Aérographie</h1>
      <div className={model.isOpen ? "model open" : "model"}>
        <img
          src={model.imgSrc}
          alt={model.imgAlt}
          style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
        />
        <p className="alt-text-legend">{toPascalCase(model.imgAlt)}</p>
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

export default Aerographe;
