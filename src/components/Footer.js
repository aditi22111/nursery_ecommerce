import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer1 text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                We are passionate about plants and planters, providing you with the best quality products and gardening tips.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white">Plants</a>
                </li>
                <li>
                  <a href="#" className="text-white">Planters</a>
                </li>
                <li>
                  <a href="#" className="text-white">Essentials</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-white">Facebook</a>
                </li>
                <li>
                  <a href="#" className="text-white">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-white">Instagram</a>
                </li>
                <li>
                  <a href="#" className="text-white">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mini-footer text-center p-1" style={{ backgroundColor: '#01370C' }}>
        © 2024 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
