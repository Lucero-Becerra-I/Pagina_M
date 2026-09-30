import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Account.css";

function Account() {
  return (
    <div className="account-page">

      <Header />

      <main className="account-container">

        <div className="account-heading">

          <span>
            MI CUENTA
          </span>

          <h1>
            Hola, María
          </h1>

          <p>
            Acá podés consultar tus reservas y tus datos.
          </p>

        </div>

        <section className="account-grid">

          <div className="account-card account-profile">

            <div className="account-avatar">
              M
            </div>

            <h2>
              María González
            </h2>

            <p>
              maria@email.com
            </p>

            <p>
              +54 9 11 1234-5678
            </p>

            <button>
              Editar datos
            </button>

          </div>

          <div className="account-card">

            <div className="account-card-header">

              <h2>
                Mis reservas
              </h2>

              <span>
                1
              </span>

            </div>

            <div className="account-order">

              <div>
                <strong>
                  #A4821
                </strong>

                <span>
                  2 productos · $32.500
                </span>
              </div>

              <span className="account-status">
                Reservado
              </span>

            </div>

            <Link
              to="/ticket/A4821"
              className="account-ticket-link"
            >
              Ver ticket →
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Account;