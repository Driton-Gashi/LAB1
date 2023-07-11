import { NavLink, Link } from "react-router-dom";
import "../../style/header.css";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="left-wrapper">
          <Link to="cart">
            <i
              title="Go to your shopping cart!"
              className="bi bi-cart-fill"
            ></i>
          </Link>
          <Link to="books/favorites">
            <i
              title="Go to your favorite books!"
              className="bi bi-heart-fill"
            ></i>
          </Link>
          <Link to="books">
            <i title="Go to our book list!" className="bi bi-book-fill"></i>
          </Link>
        </div>
        <div className="logo">
          {/* <img src="" alt="" /> */}
          <h1>Book Shop</h1>
        </div>
        <div className="right-wrapper">
          <Link to="profile">
            <i className="bi bi-person-fill"></i>
          </Link>

          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="header-bottom">
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="brands">Brands</NavLink>
          </li>
          <li>
            <NavLink to="books/best-seller">Best Seller</NavLink>
          </li>
          <li>
            <NavLink>Pages</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
