import React, { useState } from "react";
import "./rouleau.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/baie des anges.jpg";
import Img2 from "./img/p.jpg";
import Img3 from "./img/Mont Tremblant.jpg";
import Img4 from "./img/Québec Winter.jpg";
import Img5 from "./img/Saint Tropez.jpg";
import Img6 from "./img/Villa Californienne.jpg";
import Img7 from "./img/Villa Clalifornienne 2.jpg";
import Img8 from "./img/vue sur mer.jpg";


const Rouleau = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt:"Negresco"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Piscine tunisienne"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Mont-Tremblant"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt:"Québec en hiver"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"St-Tropez"
      
    },
    {
      id: 6,
      imgSrc: Img6,
      alt:"Villa Californienne"
    },
    {
      id: 7,
      imgSrc: Img7,
      alt:"Villa Californienne 2"
    },
    {
      id: 8,
      imgSrc: Img8,
      alt:"Vue sur mer"
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
    <h1 style={{ textAlign: "center" }}>Pierre Dabadie</h1>
    <h2 style={{ textAlign: "center" }}>Artiste Peintre</h2>
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

export default Rouleau;
