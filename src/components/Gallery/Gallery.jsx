import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";

const toPascalCase = (text) => {
  if (typeof text !== 'string' || !text) {
    return '';
  }
  return text
    .match(/[a-z]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(' ');
};

const GalleryItem = ({ imgName, alt, onClick }) => (
  <div className="pics" onClick={onClick}>
    <img className="picture-style" src={imgName} loading="lazy" style={{ width: "100%" }} alt={alt} />
    <p className="alt-text">{toPascalCase(alt)}</p>
  </div>
);

const Gallery = ({ imageNames, imagePath, galleryTitle }) => {
  const [model, setModel] = useState({ isOpen: false, imgSrc: "", imgAlt: "" });

  const images = imageNames.reduce((acc, imgName) => {
    acc[imgName] = require.context(`${imagePath}/${imgName.replace(/\s/g, '_')}.jpg`);
    return acc;
  }, {});

  const getImg = (imgSrc, alt) => {
    setModel({ isOpen: true, imgSrc, imgAlt: alt });
  };

  let data = imageNames.map((name, index) => ({
    id: index + 1,
    imgSrc: images[name],
    alt: name // Assuming you want the alt text to be the name in PascalCase
  }));

  return (
    <>
      <h1 className="main-intro">{galleryTitle}</h1>
      <div className={model.isOpen ? "model open" : "model"}>
        <img src={model.imgSrc} alt={model.imgAlt} style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}/>
        <p className="alt-text-legend">{toPascalCase(model.imgAlt)}</p>
        <CloseIcon onClick={() => setModel({ isOpen: false, imgSrc: "", imgAlt: "" })} />
      </div>
      <div className="gallery">
        {data.map(item => (
          <GalleryItem
            key={item.id}
            imgName={item.imgSrc}
            alt={item.alt}
            onClick={() => getImg(item.imgSrc, item.alt)}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
