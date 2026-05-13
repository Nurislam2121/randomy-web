import { useState, type FC } from "react";
import "./Header.css";
import Logo from "../../assets/Randomy.svg";
import { Link, useLocation, type Location } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import type { RootState } from "../../Redux/store/store";
import {toggleTheme} from "../../Redux/slice/themeSlice"

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location: Location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const closeMenu = () => setIsMenuOpen(false);

  const dispatch = useDispatch()
  const themeMode = useSelector((state: RootState) => state.theme.mode)

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/number" onClick={closeMenu}>
          <img src={Logo} alt="Randomy Logo" className="logo" />
        </Link>
      </div>

      <button 
        className={`burger-button ${isMenuOpen ? "open" : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`header-navigation ${isMenuOpen ? "mobile-open" : ""}`}>
        <nav className="navigation">
          <Link
            to="/number"
            className={`nav-link ${isActive("/number") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Числа
          </Link>
          <Link
            to="/list"
            className={`nav-link ${isActive("/list") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Списки
          </Link>
          <Link
            to="/wheel"
            className={`nav-link ${isActive("/wheel") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Колесо
          </Link>
        </nav>
      </div>

      <div className="header-right">
        <div className="header-icon-placeholder"><button onClick={() => dispatch(toggleTheme())} className="theme-toggle-button">Toggle Theme</button></div>
      </div>
    </header>
  );
};

export default Header;