import React from 'react'

const DetailHero = ({ categoryID, itemID }) => {
  return (
    <div className="detail-container-hero">
      {/* <div className="detail-container-hero-wallpaper">
        <img
          id="detail-hero-wallpaper"
          src=''
          alt="categoryWallpaper"
        />
      </div> */}
      <div className="d-flex-row">
        <div className='detail-container-hero-text'>
          <h1 className="font-family-marvel-principal">
            {itemID}
          </h1>
          <p className="font-family-marvel-roboto">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <img
            id="detail-picture"
            src=''
            alt="detailPicture"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailHero