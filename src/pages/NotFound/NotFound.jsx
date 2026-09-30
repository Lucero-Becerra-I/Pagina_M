import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">

      <Header />

      <main className="not-found-content">

        <span>
          404
        </span>

        <h1>
          Parece que esta página
          <br />
          se perdió.
        </h1>

        <p>
          No encontramos lo que estabas buscando.
        </p>

        <Link to="/">
          Volver al inicio
        </Link>

      </main>

      <Footer />

    </div>
  );
}

export default NotFound;