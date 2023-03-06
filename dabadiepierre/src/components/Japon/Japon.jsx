import React, { useState } from "react";
import "./japon.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/La Vague.jpg";
import Img2 from "./img/Nuit glaciale.jpg";
import Img3 from "./img/Tempete de Neige.jpg";
import Img4 from "./img/Viet Nam.jpg";
import Img5 from "./img/Zéro.jpg";



const Japon = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt:"Vague Okusai"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt:"Nuit glaciale"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt:"Tempête de neige"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt:"Vent sur le Fujiyama"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"Avion survolant, les bains chauds"
    },
    
    
    
    
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");
  const [tempimgAlt, SetTempImgAlt] = useState("");
  const getImg = (imgSrc, alt) => {
    SetTempImgSrc(imgSrc);
    SetTempImgAlt(alt);
    setModel(true);
  };
  return (
    <>
    <h1 style={{ textAlign: "center" }}>La période Japon (reproductions)</h1>
    <h2 style={{ textAlign: "center" }}>Pierre Dabadie, artiste Peintre</h2>
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

export default Japon;
