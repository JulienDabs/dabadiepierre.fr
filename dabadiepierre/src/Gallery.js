import React, { useState } from "react";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "./img/1.jpg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.jpg";
import Img4 from "./img/4.jpg";
import Img5 from "./img/5.jpg";
import Img6 from "./img/6.jpg";
import Img7 from "./img/7.jpg";
import Img8 from "./img/8.jpg";
import Img9 from "./img/9.jpg";
import Img10 from "./img/10.jpg";
import Img11 from "./img/11.jpg";
import Img12 from "./img/12.jpg";
import Img13 from "./img/13.jpg";
import Img14 from "./img/14.jpg";
import Img15 from "./img/15.jpg";
import Img16 from "./img/16.jpg";

const Gallery = () => {
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
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
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

export default Gallery;
