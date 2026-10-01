import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { products } from "../../data/products";

import "./Header.css";

/* HEADER */

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const closeMenus = () => {
    setMenuOpen(false);
  };

  const handleNavigation = () => {
    closeMenus();
    setSearchOpen(false);
    setSearchValue("");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue("");
  };

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  const normalizedSearch = searchValue
    .trim()
    .toLowerCase();

  const searchResults =
    normalizedSearch.length > 0
      ? products
          .filter((product) => {
            const name = String(product.name || "").toLowerCase();
            const category = String(
              product.category || ""
            ).toLowerCase();
            const description = String(
              product.description || ""
            ).toLowerCase();

            return (
              name.includes(normalizedSearch) ||
              category.includes(normalizedSearch) ||
              description.includes(normalizedSearch)
            );
          })
          .slice(0, 6)
      : [];

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
              aria-expanded={searchOpen}
              onClick={openSearch}
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

        {searchOpen && (
          <div className="header-search">
            <div className="header-search-inner">

              <div className="header-search-input-wrapper">

                <svg
                  className="header-search-icon"
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

                <input
                  type="text"
                  value={searchValue}
                  onChange={(event) =>
                    setSearchValue(event.target.value)
                  }
                  placeholder="Buscar productos..."
                  autoFocus
                  aria-label="Buscar productos"
                />

                {searchValue && (
                  <button
                    type="button"
                    className="header-search-clear"
                    onClick={() => setSearchValue("")}
                    aria-label="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}

              </div>

              <button
                type="button"
                className="header-search-close"
                onClick={closeSearch}
                aria-label="Cerrar búsqueda"
              >
                ×
              </button>

            </div>

            {normalizedSearch.length > 0 && (
              <div className="header-search-results">

                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/producto/${product.id}`}
                      className="header-search-result"
                      onClick={handleNavigation}
                    >
                      <img
                        src={product.image}
                        alt=""
                      />

                      <div>
                        <span>
                          {product.category}
                        </span>

                        <strong>
                          {product.name}
                        </strong>

                        {product.price && (
                          <small>
                            ${Number(product.price).toLocaleString("es-AR")}
                          </small>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="header-search-empty">
                    <span>
                      No encontramos resultados
                    </span>

                    <p>
                      Probá con otro nombre o categoría.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

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