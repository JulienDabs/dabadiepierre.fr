import React, { useState } from "react";
import "./aerographe.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/caro pop art 2008.jpg";
import Img2 from "./img/coup de soleil.jpg";
import Img3 from "./img/escarpin.jpg";
import Img4 from "./img/glace bleue.jpg";
import Img5 from "./img/lavandes aero.jpg";
import Img6 from "./img/Nu.jpg";
import Img7 from "./img/pubs.jpg";
import Img8 from "./img/royan.jpg"
import Img9 from "./img/st Rémi d'Amherst.jpg";
import Img10 from "./img/Texas.jpg";
import Img11 from "./img/Tomate et Poivrons.jpg";


const Aerographe = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "Caro Pop Art"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Coup de soleil"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Escarpin"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Glace bleue"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt:"Lavandes"
    },
    {
      id: 6,
      imgSrc: Img6,
      alt:"Nu"
    },
    {
      id: 7,
      imgSrc: Img7,
      alt:"Pubs"
    },
    {
      id: 8,
      imgSrc: Img8,
      alt:"Royan"
    },
    {
      id: 9,
      imgSrc: Img9,
      alt:"St Rémi d'Amherst"
    },
    {
      id: 10,
      imgSrc: Img10,
      alt:"Texas"
    },
    {
      id: 11,
      imgSrc: Img11,
      alt:"Tomate & Poivron"
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
    <h1 style={{ textAlign: "center" }}>L'aérographe, la Passion</h1>
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

export default Aerographe;
