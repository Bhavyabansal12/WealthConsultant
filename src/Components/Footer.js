import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="footer-wrap">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-box">
          <div className="footer-back-box1">
            <h3>About Us :</h3>
            <a href="https://wealthconsultant.in/disclaimer/">Disclaimer</a>
            <a href="https://wealthconsultant.in/disclaimer/">Investor Charter</a>
            <a href="https://wealthconsultant.in/disclaimer/">Read More..</a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="footer-box">
          <div className="footer-back-box2">
            <h3>Disclaimer :</h3>
            <p>
              Investment in securities market are subject to market risks. Read all the related documents carefully before
              investing. Registration granted by SEBI and certification from NISM is no way guarantee performance of the
              intermediary or provide any assurance of returns to investors.
              <a href="https://wealthconsultant.in/disclaimer/">Read More..</a>
            </p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-box">
          <div className="footer-back-box3">
            <h3>Contact Info :</h3>
            <address>
              <p>Phone: +91-7015909191</p>
              <p>Email: wealthconsultant.ra@gmail.com</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
