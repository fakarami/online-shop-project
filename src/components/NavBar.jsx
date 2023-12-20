import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { shopContext } from "../context/shopContext";

export default function NavBar() {
  const { cartItem } = useContext(shopContext);
  const itemCount = cartItem?.reduce((prev, current) => {
    return prev + current.count;
  }, null);
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand">Faezeh Karami</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
