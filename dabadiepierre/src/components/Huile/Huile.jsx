import React, { useState } from "react";
import "../Home/home.css";
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

import Img27 from "./img/Poet duBrusc.jpg";
import Img28 from "./img/Port en Méditerrannée.jpg";
import Img29 from "./img/Rhum.jpg";
import Img30 from "./img/Sanary sur mer.jpg";
import Img31 from "./img/st tropez à l'huile.jpg";
import Img32 from "./img/trompette 1 ere année.jpg";
import Img33 from "./img/Tropiques.jpg";
import Img34 from "./img/violon matisse.jpg";
import Img35 from "./img/vitrail.jpg";
import Img36 from "./img/Vue de Tanger.jpg";




const Huile = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      alt: "Alderney"
    },
    {
      id: 2,
      imgSrc: Img2,
      alt: "Les Antilles"
    },
    {
      id: 3,
      imgSrc: Img3,
      alt: "Bouquet moderne"
    },
    {
      id: 4,
      imgSrc: Img4,
      alt: "Bouquet"
    },
    {
      id: 5,
      imgSrc: Img5,
      alt: "Café de nuit | Van Gogh"
    },
    {
      id: 6,
      imgSrc: Img6,
      alt: "Cage tunisienne"
    },
    {
      id: 7,
      imgSrc: Img7,
      alt: "Caroline"
    },
    {
      id: 8,
      imgSrc: Img8,
      alt: "Chaise"
    },
    {
      id: 9,
      imgSrc: Img9,
      alt: "Cyprès & Lavandes"
    },
    {
      id: 10,
      imgSrc: Img10,
      alt: "Fenêtre vue mer"
    },
    {
      id: 11,
      imgSrc: Img11,
      alt: "Géza"
    },
    {
      id: 12,
      imgSrc: Img12,
      alt: "Grèce"
    },
    {
      id: 13,
      imgSrc: Img13,
      alt: "Hôtel la Garoupe | Antibes"
    },
    {
      id: 14,
      imgSrc: Img14,
      alt: "Intérieur rouge | Matisse"
    },
    {
      id: 15,
      imgSrc: Img15,
      alt: "Iris"
    },
    {
      id: 16,
      imgSrc: Img16,
      alt: "Julien"
    },
    {
      id: 17,
      imgSrc: Img17,
      alt: "La Cadière"
    },
    {
      id: 18,
      imgSrc: Img18,
      alt: "La tristesse du Roy"
    },
    {
      id: 19,
      imgSrc: Img19,
      alt: "Lavandes"
    },
    {
      id: 20,
      imgSrc: Img20,
      alt: "Le Brusc"
    },
    {
      id: 21,
      imgSrc: Img21,
      alt: "Mairie de Sanary"
    },
    {
      id: 22,
      imgSrc: Img22,
      alt: "Maquereaux"
    },
    {
      id: 23,
      imgSrc: Img23,
      alt: "Martinique"
    },
    {
      id: 24,
      imgSrc: Img24,
      alt: "Oliviers"
    },
    {
      id: 25,
      imgSrc: Img25,
      alt: "Oranges"
    },
    
    {
      id: 27,
      imgSrc: Img27,
      alt: "Port du Brusc"
    },
    {
      id: 28,
      imgSrc: Img28,
      alt: "Port en Méditarranée (1er prix)"
    },
    {
      id: 29,
      imgSrc: Img29,
      alt: "Rhum"
    },
    {
      id: 30,
      imgSrc: Img30,
      alt: "Sanary"
    },
    {
      id: 31,
      imgSrc: Img31,
      alt: "St-Tropez"
    },
    {
      id: 32,
      imgSrc: Img32,
      alt: "Trompette"
    },
    {
      id: 33,
      imgSrc: Img33,
      alt: "Tropiques"
    },
    {
      id: 34,
      imgSrc: Img34,
      alt: "Violon | Matisse"
    },
    {
      id: 35,
      imgSrc: Img35,
      alt: "Vitrail"
    },
    {
      id: 36,
      imgSrc: Img36,
      alt: "Vue de Tanger"
    },
    
  ];

 
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");
  const [tempimgAlt, SetTempImgAlt] = useState("")
  const getImg = (imgSrc, alt) => {
    SetTempImgSrc(imgSrc);
    SetTempImgAlt(alt)
    setModel(true);
  };
  return (
    <>
    <h1 className="main-intro">La peinture à l'huile et acrylique</h1>
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

export default Huile;

