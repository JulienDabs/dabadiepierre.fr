import React, { useState } from "react";
import "../Home/home.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/Amazone au perroquet.jpg";
import Img2 from "./img/Amazone.jpg";
import Img3 from "./img/Blonde.jpg";
import Img4 from "./img/Cat Woman.jpg";
import Img5 from "./img/Coup_de_Soleil.jpg";
import Img8 from "./img/femme à la rose.jpg";
import Img9 from "./img/Femme au parfum.jpg";
import Img10 from "./img/Fraise.jpg";
import Img11 from "./img/Gas Station (2).jpg";
import Img12 from "./img/Gas station.jpg";
import Img13 from "./img/Italie.jpg";
import Img14 from "./img/La Havane.jpg";
import Img15 from "./img/Le Mont Salva.jpg";
import Img16 from "./img/Le Port du Brusc.jpg";
import Img17 from "./img/Mont SALVA (2).jpg";
import Img18 from "./img/Mont Tremblant.jpg";
import Img19 from "./img/NY at night.jpg";
import Img20 from "./img/Pont NY.jpg";
import Img21 from "./img/Québec Girl.jpg";
import Img22 from "./img/Royan.jpg";
import Img23 from "./img/Texas.jpg";
import Img24 from "./img/Vespa.jpg";
import Img25 from "./img/Gold Cup.jpg"


const Today = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt:"Amazone au perroquet"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt:"L'amazone"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt:"Blonde Pop Art"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Catwoman"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"Coup de Soleil"
    },
    
    
    {
      id: 8,
      imgSrc: Img8,
      alt:"Femme à la rose"
    },
    {
      id: 9,
      imgSrc: Img9,
      alt:"Femme au parfum"
    },
    {
      id: 10,
      imgSrc: Img10,
      alt:"Fraise"
    },
    {
      id: 11,
      imgSrc: Img11,
      alt:"Gas Station"
    },
    {
      id: 12,
      imgSrc: Img12,
      alt:"Gas Station 2"
    },
    {
      id: 13,
      imgSrc: Img13,
      alt:"Italie"
    },
    {
      id: 14,
      imgSrc: Img14,
      alt:"La Havane"
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Le Mont-Salva"
    },
    {
      id: 16,
      imgSrc: Img16,
      alt:"Le port du Brusc"
    },
    {
      id: 17,
      imgSrc: Img17,
      alt:"Le Mont-Salva 2"
    },
    {
      id: 18,
      imgSrc: Img18,
      alt:"Mont-Tremblant"
    },
    {
      id: 19,
      imgSrc: Img19,
      alt:"NYC la nuit"
    },
    {
      id: 20,
      imgSrc: Img20,
      alt:"Pont NYC"
    },
    {
      id: 21,
      imgSrc: Img21,
      alt:"Québec Girl"
    },
    {
      id: 22,
      imgSrc: Img22,
      alt:"Royan"
    },
    {
      id: 23,
      imgSrc: Img23,
      alt:"Texas"
    },
    {
      id: 24,
      imgSrc: Img24,
      alt:"Vespa"
    },
    {
      id: 25,
      imgSrc: Img25,
      alt:"Gold Cup"
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
    <h1 className="main-intro">Aujourd'hui</h1>
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

export default Today;
