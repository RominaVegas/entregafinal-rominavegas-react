import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dgyebngec/image/upload/v1699710301/logo-ameliadress_iemvl1.png"
            alt="logo amelia dress"
          />
        </Link>

        <div className="menuContainer">
          <div
            className={`menuIcon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`categories ${isMenuOpen ? "open" : ""}`}>
            <Link to={"/"} onClick={toggleMenu}>
              <li>Todos</li>
            </Link>
            {categories.map((category) => (
              <Link key={category.id} to={category.path} onClick={toggleMenu}>
                <li>{category.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <CartWidget />
      </div>
    </>
  );
};
