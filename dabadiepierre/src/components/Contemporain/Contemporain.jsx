import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/café des bains ROYAN.jpg";
import Img2 from "./img/Cannes.jpg";
import Img3 from "./img/Femme Bleue.jpg";
import Img4 from "./img/gerbe d'eau.jpg";
import Img5 from "./img/Main d'Enfant.jpg";
import Img6 from "./img/Piscine.jpg";
import Img7 from "./img/port sanary 1er prix.jpg";
import Img8 from "./img/Sanary.jpg";

const Contemporain = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt:"Café des bains | Royan"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt:"Cannes"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt:"Femme bleue"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt:"Gerbe d'eau"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"Main d'enfant"
    },
    {
      id: 6,
      imgSrc: Img6,
      alt:"Piscine californienne"
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "Port de Sanary (1er prix)"
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Sanary"
    },
    
    
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");
  const [tempimgAlt, SetTempImgAlt] = useState("");
  const getImg = (imgSrc, alt) => {
    SetTempImgSrc(imgSrc);
    SetTempImgAlt(alt)
    setModel(true);
  };
  return (
    <>
    <h1 className="main-intro">Comtemporain</h1>
       <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={tempimgAlt} />
        <p className="alt-text-legend">{tempimgAlt}</p>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc, item.alt)}
            >
              <img
                className="picture-style"
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt={item.alt}
              />
              <p className="alt-text">{item.alt}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contemporain;
