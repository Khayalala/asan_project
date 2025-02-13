import "../assets/styles/global.css";
import "../assets/styles/header.css";
import asanLogo from "../assets/images/asan_logo.png";
import exitSvg from "../assets/svgs/exit_svg.svg";
import hamburgerSvg from "../assets/svgs/hamburger.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="upperHeader">
          <div className="intro">
            <div className="asanLogo">
              <img src={asanLogo} alt="logo" />
            </div>
            <p>Tədbir zallarının qeydiyyat sistemi</p>
          </div>
          <div className="userInfo">
            <span>Khayala Jafarova</span>
            <div className="exitSvg">
              <img src={exitSvg} alt="exit" />
            </div>
          </div>
        </div>
        <nav>
          <div className="upperNav">
            <div className="hamburgerSvg">
              <img src={hamburgerSvg} alt="menu" />
            </div>
          </div>

          {/* <ul className="navbar">
            <li>
              <a href="#">Zallar</a>
            </li>
            <li>
              <a href="#">Aktiv tədbirlər</a>
            </li>
            <li>
              <a href="#">Gözləyən tədbirlər</a>
            </li>
            <li>
              <a href="#">İmtinalar</a>
            </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
