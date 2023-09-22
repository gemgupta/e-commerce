import React from 'react'
import img1 from './mediamodifier-JskqEILt-ds-unsplash.jpg'
import img2 from './nimble-made-_PFanxhwe4o-unsplash.jpg'
import img3 from './nimble-made-m2z2wJ1XX6Q-unsplash.jpg'

function Header() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={img1} className="d-block w-100" alt="..." height={'400px'} width={'300px'} />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={img2} className="d-block w-100" alt="..." height={'400px'} width={'300px'}/>
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100" alt="..." height={'400px'} width={'300px'}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Header