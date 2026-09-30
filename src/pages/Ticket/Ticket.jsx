import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Ticket.css";

function Ticket() {
  const { id } = useParams();

  return (
    <div className="ticket-page">

      <Header />

      <main className="ticket-page-container">

        <div className="ticket-top">

          <span className="ticket-eyebrow">
            RESERVA
          </span>

          <h1>
            Ticket de retiro
          </h1>

          <p>
            Presentá este ticket al momento de retirar tu pedido.
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
                #{id || "A4821"}
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
              María González
            </strong>

          </div>

          <div className="ticket-code-section">

            <span>
              CÓDIGO DE RETIRO
            </span>

            <strong>
              R7K-29P
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

            <div className="ticket-product">

              <div>
                <strong>
                  Bufanda Suave
                </strong>

                <span>
                  Crema · x1
                </span>
              </div>

              <strong>
                $18.500
              </strong>

            </div>

            <div className="ticket-product">

              <div>
                <strong>
                  Pulsera Delicada
                </strong>

                <span>
                  Dorado · x1
                </span>
              </div>

              <strong>
                $14.000
              </strong>

            </div>

          </div>

          <div className="ticket-total">

            <span>
              TOTAL A ABONAR AL RETIRAR
            </span>

            <strong>
              $32.500
            </strong>

          </div>

          <div className="ticket-note">

            <strong>
              Importante
            </strong>

            <p>
              Esta reserva no representa un pago.
              El importe será abonado al momento del retiro.
            </p>

          </div>

        </div>

        <div className="ticket-actions">

          <button
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

      </main>

      <Footer />

    </div>
  );
}

export default Ticket;