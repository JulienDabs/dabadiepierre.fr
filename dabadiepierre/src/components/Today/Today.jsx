import React, { useState } from "react";
import "./today.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/Amazone au perroquet.jpg";
import Img2 from "./img/Amazone.jpg";
import Img3 from "./img/Blonde.jpg";
import Img4 from "./img/Cat Woman.jpg";
import Img5 from "./img/Coup de Soleil.jpg";
import Img6 from "./img/cuba.jpg";
import Img7 from "./img/Désert.jpg";
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
import Img23 from "./img/Station Service US.jpg";
import Img24 from "./img/Texas.jpg";
import Img25 from "./img/Vespa.jpg";


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
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
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

export default Today;
