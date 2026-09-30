import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

/* HEADER */

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
  };

  const handleNavigation = () => {
    closeMenus();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="announcement-bar">
        <p>
          Reservá online · Pagás al retirar · Coordinamos por WhatsApp
        </p>
      </div>

      <header className="header">

        <div className="header-container">

          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "is-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Cerrar menú" : "Abrir menú"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link
            to="/"
            className="brand"
            onClick={handleNavigation}
            aria-label="Ir al inicio"
          >
            <span className="brand-mark">
              ✦
            </span>

            <span className="brand-name">
              Lunaria
            </span>
          </Link>

          <nav className="desktop-navigation">

            <Link
              to="/"
              className="nav-link"
              onClick={handleNavigation}
            >
              Inicio
            </Link>

            <Link
              to="/tienda"
              className="nav-link"
              onClick={handleNavigation}
            >
              Tienda
            </Link>

            <Link
              to="/tienda?novedades=true"
              className="nav-link"
              onClick={handleNavigation}
            >
              Novedades
            </Link>

            <Link
              to="/como-funciona"
              className="nav-link"
              onClick={handleNavigation}
            >
              ¿Cómo funciona?
            </Link>

          </nav>

          <div className="header-actions">

            <button
              type="button"
              className="header-action"
              aria-label="Buscar"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="m20 20-4-4" />
              </svg>
            </button>

            <Link
              to="/favoritos"
              className="header-action"
              aria-label="Favoritos"
              onClick={handleNavigation}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z" />
              </svg>
            </Link>

            <Link
              to="/login"
              className="header-action account-action"
              aria-label="Mi cuenta"
              onClick={handleNavigation}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                />

                <path d="M5 20c.8-3.3 3.1-5 7-5s6.2 1.7 7 5" />
              </svg>
            </Link>

            <Link
              to="/carrito"
              className="cart-action"
              aria-label="Carrito"
              onClick={handleNavigation}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 5h2l1.5 10h10L20 8H7" />

                <circle
                  cx="9"
                  cy="19"
                  r="1"
                />

                <circle
                  cx="17"
                  cy="19"
                  r="1"
                />
              </svg>

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}

            </Link>

          </div>

        </div>

        {menuOpen && (
          <div className="mobile-navigation">

            <Link
              to="/"
              onClick={handleNavigation}
            >
              Inicio
            </Link>

            <Link
              to="/tienda"
              onClick={handleNavigation}
            >
              Tienda
            </Link>

            <Link
              to="/tienda?novedades=true"
              onClick={handleNavigation}
            >
              Novedades
            </Link>

            <Link
              to="/como-funciona"
              onClick={handleNavigation}
            >
              ¿Cómo funciona?
            </Link>

          </div>
        )}

      </header>
    </>
  );
}

export default Header;