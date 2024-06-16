import React from "react";
import hibiscusImage from "../images/Frame 65.png"; // Adjust the path according to your project structure

function ProductCard() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={hibiscusImage} className="card-img-top" alt="Hibiscus" />
      <div className="card-body">
        <h5 className="card-title">Jade Terrarium</h5>
        <p className="card-text">$ 350</p>
        <div className="card-botton d-flex flex-column align-items-center">
        <a href="#" className="btn btn-success">Buy</a>
      </div>
      </div>
    </div>
  );
}

export default ProductCard;
