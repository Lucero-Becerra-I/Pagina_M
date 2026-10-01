import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Reservation.css";

/* RESERVA */

const RESERVATION_STORAGE_KEY = "lunaria-last-reservation";
const RESERVATION_COUNTER_KEY = "lunaria-reservation-counter";

function getCustomerName() {
  try {
    const savedUser = localStorage.getItem("lunaria-user");

    if (!savedUser) {
      return "Cliente Lunaria";
    }

    const user = JSON.parse(savedUser);

    return (
      user.name ||
      user.nombre ||
      user.fullName ||
      user.nombreCompleto ||
      "Cliente Lunaria"
    );
  } catch {
    return "Cliente Lunaria";
  }
}

function getNextReservationNumber() {
  const currentNumber = Number(
    localStorage.getItem(RESERVATION_COUNTER_KEY) || 0
  );

  const nextNumber = currentNumber + 1;

  localStorage.setItem(
    RESERVATION_COUNTER_KEY,
    String(nextNumber)
  );

  return nextNumber;
}

function Reservation() {
  const {
    cartItems,
    cartTotal,
    clearCart,
  } = useCart();

  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const savedReservation = localStorage.getItem(
      RESERVATION_STORAGE_KEY
    );

    let existingReservation = null;

    if (savedReservation) {
      try {
        existingReservation = JSON.parse(
          savedReservation
        );
      } catch {
        existingReservation = null;
      }
    }

    /*
     * Si hay productos en el carrito,
     * creamos una nueva reserva.
     */

    if (cartItems.length > 0) {
      const cartSignature = cartItems
        .map(
          (item) =>
            `${item.id}-${item.quantity}-${item.price}`
        )
        .join("|");

      /*
       * Evita crear dos reservas iguales
       * en modo StrictMode.
       */

      if (
        existingReservation &&
        existingReservation.cartSignature ===
          cartSignature
      ) {
        setReservation(existingReservation);
        clearCart();
        return;
      }

      const reservationNumber =
        getNextReservationNumber();

      const orderId = `LUN-${String(
        reservationNumber
      ).padStart(4, "0")}`;

      const pickupCode = `RET-${String(
        reservationNumber
      ).padStart(4, "0")}`;

      const newReservation = {
        orderId,
        pickupCode,
        customerName: getCustomerName(),
        total: cartTotal,
        cartSignature,
        createdAt: new Date().toISOString(),

        products: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: Number(item.price),
          quantity: item.quantity,
          image: item.image,
        })),
      };

      localStorage.setItem(
        RESERVATION_STORAGE_KEY,
        JSON.stringify(newReservation)
      );

      setReservation(newReservation);

      clearCart();

      return;
    }

    /*
     * Si se recarga la página después de reservar,
     * recuperamos la última reserva guardada.
     */

    if (existingReservation) {
      setReservation(existingReservation);
    }
  }, [
    cartItems,
    cartTotal,
    clearCart,
  ]);

  if (!reservation) {
    return (
      <main className="reservation-page">

        <div className="reservation-container">

          <div className="reservation-icon">
            ✓
          </div>

          <span className="reservation-eyebrow">
            RESERVA
          </span>

          <h1>
            No hay una reserva para mostrar
          </h1>

          <p className="reservation-description">
            Primero agregá productos a tu carrito
            para poder realizar una reserva.
          </p>

          <div className="reservation-actions">

            <Link
              to="/tienda"
              className="reservation-primary"
            >
              Ir a la tienda
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="reservation-page">

      <div className="reservation-container">

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
              #{reservation.orderId}
            </strong>

          </div>

          <div className="ticket-divider" />

          <div className="reservation-customer">

            <span>
              CLIENTE
            </span>

            <strong>
              {reservation.customerName}
            </strong>

          </div>

          <div className="reservation-code">

            <span>
              CÓDIGO DE RETIRO
            </span>

            <strong>
              {reservation.pickupCode}
            </strong>

          </div>

          <div className="reservation-total">

            <span>
              TOTAL A ABONAR AL RETIRAR
            </span>

            <strong>
              $
              {Number(
                reservation.total
              ).toLocaleString("es-AR")}
            </strong>

          </div>

        </div>

        <div className="reservation-actions">

          <Link
            to={`/ticket/${reservation.orderId}`}
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
          to="/tienda"
          className="reservation-back"
        >
          ← Volver a la tienda
        </Link>

      </div>

    </main>
  );
}

export default Reservation;