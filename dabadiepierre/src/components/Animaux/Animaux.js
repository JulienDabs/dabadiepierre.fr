import React, { useState } from "react";
import "./animaux.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/Baleine.jpg";
import Img2 from "./img/Banc de Saupes Sculpture bois.jpg";
import Img3 from "./img/carpe koi.jpg";
import Img4 from "./img/Fruits de Mer.jpg";
import Img5 from "./img/Guadeloupe.jpg";
import Img6 from "./img/KOI.jpg";
import Img7 from "./img/Ousins et Citrons.jpg";
import Img8 from "./img/Oursins.jpg";
import Img9 from "./img/Oursin.jpg";
import Img10 from "./img/rayon vert.jpg";
//import Img11 from "./img/Vitrail Koi.jpg";


const Animaux = () => {
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
    {
      id: 10,
      imgSrc: Img10,
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
    <h1 style={{ textAlign: "center" }}>Les Animaux</h1>
    <h2 style={{ textAlign: "center" }}>Pierre Dabadie, Artiste Peintre</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="pierre Dabadie Animaux" />
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
                alt="pierre Dabadie Animaux"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Animaux;
