import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";
import { toPascalCase } from "../Utils/stringUtils";
import GalleryItem from "../Utils/GalleryItem";
// Dynamic image imports
const imageNames = [
  "La Vague",
  "Nuit glaciale",
  "Tempete de Neige",
  "Viet Nam",
  "Zéro",
];



const images = imageNames.reduce((acc, imgName) => {
  acc[imgName] = require(`../../assets/Japon/img/${imgName.replace(/\s/g, "_")}.jpg`);
  return acc;
}, {});



// Japon Component
const Japon = () => {
  const [model, setModel] = useState({ isOpen: false, imgSrc: "", imgAlt: "" });

  const getImg = (imgName, alt) => {
    setModel({ isOpen: true, imgSrc: images[imgName], imgAlt: alt });
  };

  let data = imageNames.map((name, index) => ({
    id: index + 1,
    imgName: name,
    alt: toPascalCase(name), // Assuming alt text is the same as the image name
  }));

  return (
    <>
      <h1 className="main-intro">La période Japon (reproductions)</h1>
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

export default Japon;
