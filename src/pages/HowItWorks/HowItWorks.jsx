import "./HowItWorks.css";

/* HOW IT WORKS */

function HowItWorks() {
  return (
    <div className="how-it-works">

      <section className="how-it-works-hero">

        <span className="section-eyebrow">
          RESERVÁ CON CALMA
        </span>

        <h1>
          ¿Cómo funciona?
        </h1>

        <p>
          Elegí tus productos, hacé tu reserva
          y coordinamos el retiro con vos.
        </p>

      </section>

      <section className="how-it-works-content">

        <div className="section-heading">

          <span className="section-eyebrow">
            PASO A PASO
          </span>

          <h2>
            Así de simple
          </h2>

        </div>

        <div className="steps-grid">

          <article className="step-card">
            <span className="step-number">
              01
            </span>

            <h3>
              Elegí tus productos
            </h3>

            <p>
              Explorá la tienda y elegí las piezas
              que quieras reservar.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">
              02
            </span>

            <h3>
              Hacé tu reserva
            </h3>

            <p>
              Agregá tus productos al carrito
              y confirmá tu reserva.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">
              03
            </span>

            <h3>
              Coordinamos
            </h3>

            <p>
              Nos contactamos por WhatsApp para
              coordinar los detalles del retiro.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">
              04
            </span>

            <h3>
              Retirá tu pedido
            </h3>

            <p>
              Cuando esté listo, lo retirás
              y realizás el pago.
            </p>
          </article>

        </div>

      </section>

      <section className="reservation-note">

        <span className="reservation-note-label">
          ACLARACIÓN
        </span>

        <h2>
          El pago se realiza al retirar.
        </h2>

        <p>
          No necesitás pagar online. Primero hacés
          tu reserva y después coordinamos con vos
          por WhatsApp cuándo y dónde retirar.
        </p>

      </section>

    </div>
  );
}

export default HowItWorks;