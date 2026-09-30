import { Link } from "react-router-dom";

import { useFavorites } from "../../context/FavoritesContext";

import "./ProductCard.css";

/* PRODUCT CARD */

function ProductCard({ product }) {
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const favorite = isFavorite(product.id);

  const handleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(product);
  };

  return (
    <article className="product-card">

      <div className="product-card-image">

        <Link
          to={`/producto/${product.id}`}
          className="product-card-image-link"
        >

          <img
            src={product.image}
            alt={product.name}
          />

        </Link>

        {product.isNew && (
          <span className="product-card-badge">
            NUEVO
          </span>
        )}

        <button
          type="button"
          className={`product-card-favorite ${
            favorite ? "is-favorite" : ""
          }`}
          onClick={handleFavorite}
          aria-label={
            favorite
              ? `Quitar ${product.name} de favoritos`
              : `Agregar ${product.name} a favoritos`
          }
          aria-pressed={favorite}
        >

          <svg
            viewBox="0 0 24 24"
            fill={favorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z" />
          </svg>

        </button>

      </div>

      <div className="product-card-content">

        <Link
          to={`/producto/${product.id}`}
          className="product-card-info"
        >

          <span className="product-card-category">
            {product.category}
          </span>

          <h3>
            {product.name}
          </h3>

          {product.description && (
            <p>
              {product.description}
            </p>
          )}

          {product.price && (
            <span className="product-card-price">
              ${product.price}
            </span>
          )}

        </Link>

      </div>

    </article>
  );
}

export default ProductCard;