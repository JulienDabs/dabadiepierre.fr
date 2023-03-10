import React, { useState } from "react";
import "./home.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/baie des anges.jpg";
import Img2 from "./img/Le Port du Brusc.jpg";
import Img3 from "./img/Main d'Enfant.jpg";
import Img4 from "./img/Mont SALVA.jpg";
import Img5 from "./img/Mont Tremblant.jpg";
import Img6 from "./img/NY at night.jpg";
import Img7 from "./img/Ousins et Citrons.jpg";
import Img8 from "./img/Rhum.jpg";
import Img9 from "./img/Vespa.jpg";


const Home = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt:"Negresco"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt:"Port du Brusc"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt:"Main d'enfant"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt:"Mont-Salva"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"Mont-Tremblant"
    },
    {
      id: 6,
      imgSrc: Img6,
      alt:"NYC la nuit"
    },
    {
      id: 7,
      imgSrc: Img7,
      alt:"Oursins & Citrons"
    },
    {
      id: 8,
      imgSrc: Img8,
      alt:"Rhum"
    },
    {
      id: 9,
      imgSrc: Img9,
      alt:"Vespa"
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
    <div className="main-intro">
      <h1 className="main-intro-title">Pierre Dabadie</h1>
      <h2>Artiste Peintre</h2>
      <h3>Une évolution au fil du temps</h3>
    </div>
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

export default Home;
