import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
        Indulge in a rich culinary journey with our thoughtfully curated menu,
         featuring a delightful fusion of flavors made from the freshest ingredients. 
        Every dish is crafted with passion and precision to bring you an unforgettable dining experience.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;