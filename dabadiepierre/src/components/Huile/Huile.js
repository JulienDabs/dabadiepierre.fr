import React, { useState } from "react";
import "./huile.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/alderney.jpg";
import Img2 from "./img/antilles.jpg";
import Img3 from "./img/bouquet moderne.jpg";
import Img4 from "./img/bouquet.jpg";
import Img5 from "./img/café de nuit.jpg";
import Img6 from "./img/cage tunisienne.jpg";
import Img7 from "./img/caroline.jpg";
import Img8 from "./img/chaise 1 ere année.jpg";
import Img9 from "./img/cyprès+lavande.jpg";
import Img10 from "./img/fenetre sur mer.jpg";
import Img11 from "./img/Geza.jpg";
import Img12 from "./img/grèce.jpg";
import Img13 from "./img/hôtel le garoupe.antibes.jpg";
import Img14 from "./img/interieur rouge matisse.jpg";
import Img15 from "./img/iris.jpg";
import Img16 from "./img/julien.jpg";
import Img17 from "./img/la cadière.jpg";
import Img18 from "./img/La tristesse du Roy.jpg";
import Img19 from "./img/Lavandes.jpg";
import Img20 from "./img/le brusc.jpg";
import Img21 from "./img/mairie sanary.jpg";
import Img22 from "./img/maqueraux.jpg";
import Img23 from "./img/martinique.jpg";
import Img24 from "./img/oliviers.jpg";
import Img25 from "./img/oranges très orange.jpg";
import Img26 from "./img/piscine tunisienne.jpg";
import Img27 from "./img/Poet duBrusc.jpg";
import Img28 from "./img/Port en Méditerrannée.jpg";
import Img29 from "./img/Rhum.jpg";
import Img30 from "./img/Sanary sur mer.jpg";
import Img31 from "./img/st tropez à l'huile.jpg";
import Img32 from "./img/trompette 1 ere année.jpg";
import Img33 from "./img/Tropiques.jpg";
import Img34 from "./img/violon matisse.jpg";
import Img35 from "./img/vitrail.jpg";
import Img36 from "./img/Rhum.jpg";
import Img37 from "./img/Vue de Tanger.jpg";




const Huile = () => {
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
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
    {
      id: 28,
      imgSrc: Img28,
    },
    {
      id: 29,
      imgSrc: Img29,
    },
    {
      id: 30,
      imgSrc: Img30,
    },
    {
      id: 31,
      imgSrc: Img31,
    },
    {
      id: 32,
      imgSrc: Img32,
    },
    {
      id: 33,
      imgSrc: Img33,
    },
    {
      id: 34,
      imgSrc: Img34,
    },
    {
      id: 35,
      imgSrc: Img35,
    },
    {
      id: 36,
      imgSrc: Img36,
    },
    {
      id: 37,
      imgSrc: Img37,
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
    <h1 style={{ textAlign: "center" }}>La peinture à l'huile et acrylique</h1>
    <h2 style={{ textAlign: "center" }}>Pierre Dabadie, Artiste Peintre</h2>
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

export default Huile;

