import React from 'react'

const DetailHero = ({ categoryID }) => {
  return (
    <div className="detail-container-hero">
      <div className="detail-container-hero-wallpaper">
        <img
          id="detail-hero-wallpaper"
          src=''
          alt="categoryWallpaper"
        />
      </div>
      <div className="detail-container-hero-text">
        <h1 className="font-family-marvel-principal">
          marvel {categoryID}
        </h1>
        <h2 className="font-family-marvel-roboto">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
    </div>
  )
}

export default DetailHero