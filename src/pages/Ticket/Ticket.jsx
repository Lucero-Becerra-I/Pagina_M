import { Link, useParams } from "react-router-dom";

import "./Ticket.css";

/* TICKET */

const RESERVATION_STORAGE_KEY = "lunaria-last-reservation";

function getSavedReservation() {
  try {
    const savedReservation = localStorage.getItem(
      RESERVATION_STORAGE_KEY
    );

    return savedReservation
      ? JSON.parse(savedReservation)
      : null;
  } catch {
    return null;
  }
}

function Ticket() {
  const { id } = useParams();

  const reservation =
    getSavedReservation();

  if (!reservation) {
    return (
      <main className="ticket-page">

        <div className="ticket-page-container">

          <div className="ticket-top">

            <span className="ticket-eyebrow">
              TICKET
            </span>

            <h1>
              Ticket no encontrado
            </h1>

            <p>
              No encontramos una reserva guardada
              asociada a este ticket.
            </p>

          </div>

          <Link
            to="/tienda"
            className="ticket-account"
          >
            ← Volver a la tienda
          </Link>

        </div>

      </main>
    );
  }

  const total = Number(
    reservation.total || 0
  );

  return (
    <main className="ticket-page">

      <div className="ticket-page-container">

        <div className="ticket-top">

          <span className="ticket-eyebrow">
            RESERVA
          </span>

          <h1>
            Ticket de retiro
          </h1>

          <p>
            Presentá este ticket al momento de
            retirar tu pedido.
          </p>

        </div>

        <div className="ticket-card">

          <div className="ticket-brand">
            <span>✦</span>
            Lunaria
          </div>

          <div className="ticket-main-header">

            <div>

              <span>
                PEDIDO
              </span>

              <strong>
                #{reservation.orderId || id}
              </strong>

            </div>

            <div className="ticket-status">
              RESERVADO
            </div>

          </div>

          <div className="ticket-line" />

          <div className="ticket-user">

            <span>
              CLIENTE
            </span>

            <strong>
              {reservation.customerName}
            </strong>

          </div>

          <div className="ticket-code-section">

            <span>
              CÓDIGO DE RETIRO
            </span>

            <strong>
              {reservation.pickupCode}
            </strong>

          </div>

          <div className="ticket-qr">

            <div className="fake-qr">
              <div />
              <div />
              <div />
              <div />
            </div>

            <small>
              Presentá el código o QR
            </small>

          </div>

          <div className="ticket-line" />

          <div className="ticket-products">

            {reservation.products.map(
              (product) => (
                <div
                  className="ticket-product"
                  key={product.id}
                >

                  <div>

                    <strong>
                      {product.name}
                    </strong>

                    <span>
                      {product.category} · x
                      {product.quantity}
                    </span>

                  </div>

                  <strong>
                    $
                    {(
                      Number(product.price) *
                      product.quantity
                    ).toLocaleString("es-AR")}
                  </strong>

                </div>
              )
            )}

          </div>

          <div className="ticket-total">

            <span>
              TOTAL A ABONAR AL RETIRAR
            </span>

            <strong>
              ${total.toLocaleString("es-AR")}
            </strong>

          </div>

          <div className="ticket-note">

            <strong>
              Importante
            </strong>

            <p>
              Esta reserva no representa un pago.
              El importe será abonado al momento
              del retiro.
            </p>

          </div>

        </div>

        <div className="ticket-actions">

          <button
            type="button"
            onClick={() => window.print()}
            className="ticket-print"
          >
            Imprimir ticket
          </button>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="ticket-whatsapp"
          >
            Consultar por WhatsApp
          </a>

        </div>

        <Link
          to="/mi-cuenta"
          className="ticket-account"
        >
          ← Volver a mi cuenta
        </Link>

      </div>

    </main>
  );
}

export default Ticket;