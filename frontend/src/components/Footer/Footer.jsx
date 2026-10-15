import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Logo & About */}
          <div className="footer-content-left">
            <img src={assets.logo} alt="logo" className="footer-logo" />
            <p>
            🍽️ Appetite – Fast, Fresh, & Flavorful! 🚀
Craving something delicious? From sizzling burgers to cheesy pizzas, we deliver happiness to your doorstep. Order now & treat your taste buds! 🍕🍔🌮
            </p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com">
                <img src={assets.facebook_icon} alt="facebook" />
              </a>
              <a href="https://www.twitter.com">
                <img src={assets.twitter_icon} alt="twitter" />
              </a>
              <a href="https://www.linkedin.com">
                <img src={assets.linkedin_icon} alt="linkedin" />
              </a>
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="footer-content-center">
            <h2>WATCH OUT!!</h2>
            <ul>
              <li onClick={() => navigate("/")}>🏠 Home</li>
              <li>ℹ️ About Us</li>
              <li>🚚 Delivery</li>
              <li>📜 Privacy Policy</li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>📞 +1-123-456-7890</li>
              <li>📧 contact@actualappetite.com</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2025 ActualAppetite.com | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
