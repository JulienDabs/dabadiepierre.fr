// src/components/GalleryItem.js
import React from 'react';

const GalleryItem = ({ imgName, alt, onClick, images }) => (
  <div className="pics" onClick={onClick}>
    <img
      className="picture-style"
      src={images[imgName]}
      loading="lazy"
      style={{ width: "100%" }}
      alt={alt}
    />
    <p className="alt-text">{alt}</p>
  </div>
);

export default GalleryItem;
