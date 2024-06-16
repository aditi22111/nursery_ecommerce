import React from "react";
import IndoorImage from "../images/Frame 61.png"; 

function ProductCard() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={IndoorImage} className="card-img-top" alt="Indoor Image" />
      <div className="card-body d-flex flex-column align-items-center">
        <a href="#" className="btn btn-success">Shop Now</a>
      </div>
    </div>
  );
}

export default ProductCard;
