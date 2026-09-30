import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useFavorites } from "../../context/FavoritesContext";

import "./Favorites.css";

/* FAVORITES */

function Favorites() {
  const {
    favorites,
    clearFavorites,
  } = useFavorites();

  return (
    <div className="favorites-page">

      {/* HEADER */}

      <section className="favorites-header">

        <div>

          <span className="favorites-eyebrow">
            TU COLECCIÓN PERSONAL
          </span>

          <h1>
            Favoritos
          </h1>

        </div>

        {favorites.length > 0 && (
          <span className="favorites-count">
            {favorites.length}{" "}
            {favorites.length === 1
              ? "producto"
              : "productos"}
          </span>
        )}

      </section>

      {/* CONTENT */}

      {favorites.length > 0 ? (

        <section className="favorites-content">

          <div className="favorites-toolbar">

            <p>
              Tus piezas guardadas para volver
              cuando quieras.
            </p>

            <button
              type="button"
              onClick={clearFavorites}
            >
              Vaciar favoritos
            </button>

          </div>

          <div className="favorites-grid">

            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </section>

      ) : (

        <section className="favorites-empty">

          <div className="favorites-empty-icon">
            ♡
          </div>

          <span className="favorites-eyebrow">
            TODAVÍA NO HAY NADA ACÁ
          </span>

          <h2>
            Guardá las piezas
            <br />
            que más te gusten.
          </h2>

          <p>
            Cuando encuentres algo especial,
            tocá el corazón para guardarlo
            y volver más tarde.
          </p>

          <Link
            to="/tienda"
            className="favorites-empty-button"
          >
            Explorar tienda
            <span>→</span>
          </Link>

        </section>

      )}

    </div>
  );
}

export default Favorites;