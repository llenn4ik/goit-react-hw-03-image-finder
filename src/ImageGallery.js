import React from "react";
// import ImageGalleryItem from "./ImageGalleryItem";
import s from './styles.module.css'

export default function ImageGallery({ arrayImages, imageClick }) {
  return (
    <>
       <ul className={s.ImageGallery}>
            {arrayImages.map((arrayImage) => (
              <li key={arrayImage.id} className={s.ImageGalleryItem}>
                <img
                  src={arrayImage.previewURL}
                  // srcSet={largeImageURL}
                  alt="foto"
                  className={s.ImageGalleryItem_image}
                  // onClick={onClickModal}
                />
              </li>
            ))}
          </ul>
    </>
  );
}