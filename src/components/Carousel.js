import React from "react";
import img from '../images/Plant Studio Room _ Indoor Jungle Inspiration _ Micro, Small, Intimate, Tiny Wedding Venue _ Virginia1.jpeg';
import './Carousel.css'

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={img} className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img} className="d-block w-100 carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100 carousel-img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}