import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import s from './styles.module.css'

export default function ImageGallery({ arrayImages, onClickModal }) {
  return (
    <>
       <ul className={s.ImageGallery}>
            {arrayImages.map((arrayImage) => (
              <ImageGalleryItem   key={arrayImage.id}  image={arrayImage} onClickModal={onClickModal}/>
            ))}
          </ul>
    </>
  );
}