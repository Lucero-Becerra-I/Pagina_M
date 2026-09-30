import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Reservation.css";

function Reservation() {
  return (
    <div className="reservation-page">

      <Header />

      <main className="reservation-container">

        <div className="reservation-icon">
          ✓
        </div>

        <span className="reservation-eyebrow">
          RESERVA REALIZADA
        </span>

        <h1>
          ¡Tu reserva fue registrada!
        </h1>

        <p className="reservation-description">
          Guardamos tu pedido correctamente.
          El pago se realizará al momento del retiro.
        </p>

        <div className="reservation-ticket">

          <div className="ticket-header">
            <span>
              PEDIDO
            </span>

            <strong>
              #A4821
            </strong>
          </div>

          <div className="ticket-divider" />

          <div className="reservation-customer">

            <span>
              CLIENTE
            </span>

            <strong>
              María González
            </strong>

          </div>

          <div className="reservation-code">

            <span>
              CÓDIGO DE RETIRO
            </span>

            <strong>
              R7K-29P
            </strong>

          </div>

          <div className="reservation-total">

            <span>
              TOTAL A ABONAR AL RETIRAR
            </span>

            <strong>
              $32.500
            </strong>

          </div>

        </div>

        <div className="reservation-actions">

          <Link
            to="/ticket/A4821"
            className="reservation-primary"
          >
            Ver ticket
          </Link>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="reservation-whatsapp"
          >
            Hablar por WhatsApp
          </a>

        </div>

        <Link
          to="/"
          className="reservation-back"
        >
          ← Volver a la tienda
        </Link>

      </main>

      <Footer />

    </div>
  );
}

export default Reservation;