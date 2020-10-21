import React from "react";
import s from "./styles.module.css";

export default function ImageGalleryItem({image, onClickModal }) {
  const {id, previewURL,  tags, largeImageURL } = image;

  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={previewURL}
        srcSet={largeImageURL}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={onClickModal}
      />
    </li>
  );
}