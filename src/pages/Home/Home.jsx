import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import { products } from "../../data/products";
import { categories } from "../../data/categories";

import "./Home.css";

/* HOME */

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">

      {/* HERO */}

      <section className="home-hero">

        <div className="home-hero-content">

          <span className="home-eyebrow">
            HECHO A MANO · CON CARIÑO
          </span>

          <h1>
            Pequeñas cosas,
            <br />
            <em>grandes momentos.</em>
          </h1>

          <p>
            Objetos hechos a mano para acompañar
            tus días, tus espacios y esos pequeños
            momentos que querés guardar.
          </p>

          <div className="home-hero-actions">

            <Link
              to="/tienda"
              className="home-primary-button"
            >
              Explorar tienda
              <span>→</span>
            </Link>

            <Link
              to="/como-funciona"
              className="home-secondary-link"
            >
              ¿Cómo funciona?
            </Link>

          </div>

        </div>

        <div className="home-hero-image">

          <img
            src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1400&q=85"
            alt="Objetos hechos a mano"
          />

          <div className="home-hero-note">
            <span>01</span>
            Hecho a mano
          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="home-categories">

        <div className="home-section-heading">

          <div>
            <span className="home-eyebrow">
              DESCUBRÍ
            </span>

            <h2>
              Hecho para encontrar
              <br />
              algo especial.
            </h2>
          </div>

          <Link to="/tienda">
            Ver todo →
          </Link>

        </div>

        <div className="home-category-grid">

          {categories.map((category, index) => {

            const images = [
              "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
              "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
              "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85",
            ];

            return (
              <Link
                to={`/tienda?category=${category.id}`}
                className="home-category-card"
                key={category.id}
              >

                <img
                  src={images[index]}
                  alt={category.name}
                />

                <div className="home-category-overlay">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                  <strong>
                    Explorar →
                  </strong>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* FEATURED */}

      <section className="home-selection">

        <div className="home-section-heading">

          <div>
            <span className="home-eyebrow">
              UNA PEQUEÑA SELECCIÓN
            </span>

            <h2>
              Algunos favoritos
            </h2>
          </div>

          <Link to="/tienda">
            Ver tienda →
          </Link>

        </div>

        <div className="home-products">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="home-process">

        <div className="home-process-intro">

          <span className="home-eyebrow">
            RESERVÁ CON CALMA
          </span>

          <h2>
            Comprar también
            <br />
            puede ser simple.
          </h2>

          <p>
            Elegís lo que te gusta, hacés tu reserva
            y nosotros nos encargamos del resto.
          </p>

          <Link
            to="/como-funciona"
            className="home-process-link"
          >
            Ver cómo funciona →
          </Link>

        </div>

        <div className="home-process-steps">

          <article>
            <span>01</span>

            <h3>
              Elegí
            </h3>

            <p>
              Explorá la tienda y encontrá
              tus piezas favoritas.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>
              Reservá
            </h3>

            <p>
              Confirmá tu pedido desde
              la tienda.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>
              Coordinamos
            </h3>

            <p>
              Nos ponemos en contacto
              por WhatsApp.
            </p>
          </article>

          <article>
            <span>04</span>

            <h3>
              Retirá
            </h3>

            <p>
              Retirás tu pedido y
              pagás en ese momento.
            </p>
          </article>

        </div>

      </section>

      {/* STORY */}

      <section className="home-story">

        <div className="home-story-image">

          <img
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=1200&q=85"
            alt="Detalle de una pieza artesanal"
          />

        </div>

        <div className="home-story-content">

          <span className="home-eyebrow">
            LA IDEA DETRÁS DE LUNARIA
          </span>

          <h2>
            Lo imperfecto
            <br />
            también puede ser
            <em> hermoso.</em>
          </h2>

          <p>
            Cada pieza tiene sus pequeñas diferencias:
            una textura, una forma, una marca del proceso.
            Es justamente eso lo que hace especial a
            algo hecho a mano.
          </p>

          <Link to="/tienda">
            Descubrir la colección →
          </Link>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="home-final">

        <span className="home-eyebrow">
          LUNARIA
        </span>

        <h2>
          Encontrá algo que
          <br />
          quieras llevarte.
        </h2>

        <p>
          Explorá la colección y reservá tus favoritos.
        </p>

        <Link
          to="/tienda"
          className="home-final-button"
        >
          Ir a la tienda
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default Home;