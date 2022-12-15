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
      <div className="detail-container-body">
        <div className='detail-container-body-text'>
          <h1 className="font-family-marvel-principal" id='detail-container-body-text-header'>
            {itemID}
          </h1>
          <p id='detail-container-body-text-body' className="font-family-marvel-roboto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae qui facilis illo repudiandae quas mollitia deleniti voluptas repellendus corporis. Repellat temporibus harum atque hic, dolores non et mollitia obcaecati ex. Esse quia quasi aperiam odio nisi quam explicabo earum quisquam dignissimos dolores qui cumque eos minima architecto ipsam, modi, praesentium inventore consectetur veniam odit beatae. Vitae ducimus autem laboriosam tempore, asperiores ipsa optio amet quia, fuga, praesentium nihil! Harum fugiat nihil quo aliquid nobis est eveniet facere optio ratione repellendus? Voluptate omnis sint, eveniet quis ullam minima, molestias placeat error inventore odio excepturi sequi saepe? Reprehenderit veritatis sed nesciunt soluta!
          </p>
          <h2 className="font-family-marvel-principal detail-container-body-text-subheader">Subheader</h2>
          <p className="font-family-marvel-roboto detail-container-body-text-subbody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad.</p>
          <h2 className="font-family-marvel-principal detail-container-body-text-subheader">Subheader</h2>
          <p className="font-family-marvel-roboto detail-container-body-text-subbody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in.</p>
        </div>
        <div className='detail-container-picture'>
          <img
            id="detail-picture"
            src='https://blog.latam.playstation.com/tachyon/sites/3/2022/06/35cad566eb5c0eb56188715723bbcb0c3d28982d.jpg?resize=1088%2C612&crop_strategy=smart'
            alt="detailPicture"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailHero