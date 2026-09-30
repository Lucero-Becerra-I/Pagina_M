import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  return (
    <main className="cart-page">
      <section className="cart-container">
        <div className="cart-header">
          <span className="cart-eyebrow">TU RESERVA</span>
          <h1>Carrito</h1>
          <p>
            Revisá los productos que querés reservar antes de continuar.
          </p>
        </div>

        <div className="cart-empty">
          <div className="cart-empty-icon">♡</div>

          <h2>Tu carrito está vacío</h2>

          <p>
            Todavía no agregaste productos. Explorá nuestra tienda y
            encontrá algo que te guste.
          </p>

          <Link to="/tienda" className="cart-shop-button">
            Explorar tienda
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Cart;