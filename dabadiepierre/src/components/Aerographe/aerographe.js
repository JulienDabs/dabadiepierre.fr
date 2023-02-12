import React, { useState } from "react";
import "./aerogrpahe.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/caro pop art 2008.jpg";
import Img2 from "./img/coup de soleil.jpg";
import Img3 from "./img/escarpin.jpg";
import Img4 from "./img/glace bleue.jpg";
import Img5 from "./img/lavandes aero.jpg";
import Img6 from "./img/Nu.jpg";
import Img7 from "./img/pubs.jpg";
import Img8 from "./img/st Rémi d'Amherst.jpg";
import Img9 from "./img/Texas.jpg";
import Img10 from "./img/Tomate et Poivronfa-stack.jpg";


const Aerographe = () => {
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
    <h1 style={{ textAlign: "center" }}>L'aérographe, la Passion</h1>
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

export default Aerographe;
