import { useState } from "react";
import "../assets/styles/global.css";
import "../assets/styles/header.css";
import menuIcon from "../assets/svgs/menu.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="headerContainer">
      <div className="upperHeader" onClick={() => setIsOpen(!isOpen)}>
        <div className="menuIcon">
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      <nav className={`navBar ${isOpen ? "open" : ""}`}>
        <ul className="navList">
          <Link to="/"><li>Zallar</li></Link>
          <Link to="/active"><li>Aktiv tədbirlər</li></Link>
          <Link to="/waiting"><li>Gözləyən tədbirlər</li></Link>
          <Link to="/rejected"><li>İmtinalar</li></Link>
        </ul>
      </nav>
    </header>
  );
};
