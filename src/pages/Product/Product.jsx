
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { products } from "../../data/products";
import { useFavorites } from "../../context/FavoritesContext";

import "./Product.css";

/* PRODUCT */

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);

  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  if (!product) {
    return (
      <main className="product-page">

        <section className="product-not-found">

          <span>
            PRODUCTO NO ENCONTRADO
          </span>

          <h1>
            No encontramos este producto
          </h1>

          <p>
            Puede que el producto haya sido retirado o que el enlace ya no
            sea válido.
          </p>

          <Link
            to="/tienda"
            className="product-back-button"
          >
            Volver a la tienda
          </Link>

        </section>

      </main>
    );
  }

  const favorite = isFavorite(product.id);

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const handleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <main className="product-page">

      <div className="product-container">

        <Link
          to="/tienda"
          className="product-back"
        >
          ← Volver a la tienda
        </Link>

        <section className="product-detail">

          <div className="product-image-wrapper">

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            {product.isNew && (
              <span className="product-image-badge">
                NUEVO
              </span>
            )}

          </div>

          <div className="product-information">

            <span className="product-category">
              {product.category}
            </span>

            <div className="product-title-row">

              <h1>
                {product.name}
              </h1>

              <button
                type="button"
                className={`product-favorite ${
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

            <p className="product-price">
              ${Number(product.price).toLocaleString("es-AR")}
            </p>

            <div className="product-separator" />

            <p className="product-description">
              {product.description ||
                "Una pieza artesanal realizada con cuidado y pensada para acompañarte durante mucho tiempo."}
            </p>

            <div className="product-reservation-note">

              <span>✦</span>

              <div>

                <strong>
                  Reservá online
                </strong>

                <p>
                  No realizás ningún pago ahora. Prepararemos tu pedido y
                  podrás abonarlo al momento de retirarlo.
                </p>

              </div>

            </div>

            <div className="product-purchase">

              <div className="product-quantity">

                <span>
                  Cantidad
                </span>

                <div className="quantity-control">

                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>

                  <span>
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                type="button"
                className="product-reserve-button"
                onClick={() => {
                  alert(
                    `Agregamos ${quantity} unidad${
                      quantity > 1 ? "es" : ""
                    } de ${product.name} a tu reserva.`
                  );
                }}
              >
                Agregar a mi reserva
              </button>

            </div>

            <div className="product-info-list">

              <div>
                <span>✓</span>
                <p>
                  Pago al retirar
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  WhatsApp
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Ticket incluido
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Product;

