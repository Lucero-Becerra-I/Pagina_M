import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div className="footer-brand">

          <div className="footer-logo">
            <span>✦</span>
            Lunaria
          </div>

          <p>
            Productos hechos a mano para
            momentos que merecen quedarse.
          </p>

        </div>

        <div className="footer-column">

          <h4>Tienda</h4>

          <Link to="/tienda">Todos los productos</Link>
          <Link to="/tienda?category=Tejidos">Tejidos</Link>
          <Link to="/tienda?category=Bijou">Bijou</Link>
          <Link to="/tienda?category=Cerámicas">
            Cerámicas
          </Link>

        </div>

        <div className="footer-column">

          <h4>Ayuda</h4>

          <a href="#como-funciona">
            ¿Cómo funciona?
          </a>

          <a href="#retiros">
            Retiros
          </a>

          <a href="#whatsapp">
            Contacto
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Lunaria
        </span>

        <span>
          Hecho con cariño.
        </span>
      </div>

    </footer>
  );
}

export default Footer;