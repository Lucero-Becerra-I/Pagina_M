import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Cart.css";

/* CARRITO */

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const formatPrice = (price) => {
    return Number(price).toLocaleString("es-AR");
  };

  return (
    <main className="cart-page">
      <section className="cart-container">

        <div className="cart-header">
          <span className="cart-eyebrow">
            TU RESERVA
          </span>

          <h1>
            Carrito
          </h1>

          <p>
            Revisá los productos que querés reservar
            antes de continuar.
          </p>
        </div>

        {cartItems.length === 0 ? (

          /* CARRITO VACÍO */

          <div className="cart-empty">

            <div className="cart-empty-icon">
              ♡
            </div>

            <h2>
              Tu carrito está vacío
            </h2>

            <p>
              Todavía no agregaste productos. Explorá
              nuestra tienda y encontrá algo que te guste.
            </p>

            <Link
              to="/tienda"
              className="cart-shop-button"
            >
              Explorar tienda
            </Link>

          </div>

        ) : (

          /* CARRITO CON PRODUCTOS */

          <div className="cart-empty cart-filled">

            <div className="cart-filled-top">

              <h2>
                Tu reserva
              </h2>

              <button
                type="button"
                className="cart-clear-button"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>

            </div>

            <div className="cart-items">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >

                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-info">

                    <span className="cart-item-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p className="cart-item-price">
                      ${formatPrice(item.price)}
                    </p>

                  </div>

                  <div className="cart-item-actions">

                    <div className="cart-quantity-control">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        aria-label={`Disminuir cantidad de ${item.name}`}
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        +
                      </button>

                    </div>

                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Eliminar
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="cart-total">

              <span>
                Total de la reserva
              </span>

              <strong>
                ${formatPrice(cartTotal)}
              </strong>

            </div>

            <div className="cart-filled-actions">

              <Link
                to="/tienda"
                className="cart-continue-button"
              >
                Seguir comprando
              </Link>

              <Link
                to="/reserva"
                className="cart-shop-button"
              >
                Continuar con la reserva
              </Link>

            </div>

          </div>

        )}

      </section>
    </main>
  );
}

export default Cart;