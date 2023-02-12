import React, { useState } from "react";
import "./rouleau.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/baie des anges.jpg";
import Img2 from "./img/hiver-quebec.jpg";
import Img3 from "./img/Piscine Tunisienne.jpg";
import Img4 from "./img/Mont Tremblant.jpg";
import Img5 from "./img/Québec Winter.jpg";
import Img6 from "./img/Saint Tropez.jpg";
import Img7 from "./img/Villa Californienne.jpg";
import Img8 from "./img/Villa Clalifornienne 2.jpg";
import Img9 from "./img/vue sur mer.jpg";


const Rouleau = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Pierre Dabadie</h1>
    <h2 style={{ textAlign: "center" }}>Artiste Peintre</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="pierre Dabadie" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt="pierre Dabadie"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rouleau;
