import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import { products } from "../../data/products";
import { categories } from "../../data/categories";

import "./Shop.css";

/* SHOP */

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "todos";

  const showNewProducts =
    searchParams.get("novedades") === "true";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFromUrl !== "todos") {
      result = result.filter((product) => {
        return (
          product.categorySlug === categoryFromUrl ||
          product.category?.toLowerCase() ===
            categoryFromUrl.toLowerCase()
        );
      });
    }

    if (showNewProducts) {
      result = result.filter(
        (product) => product.isNew === true
      );
    }

    return result;
  }, [categoryFromUrl, showNewProducts]);

  const handleCategory = (category) => {
    if (category === "todos") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      category,
    });
  };

  const handleNewProducts = () => {
    setSearchParams({
      novedades: "true",
    });
  };

  return (
    <div className="shop">

      {/* SHOP HEADER */}

      <section className="shop-header">

        <div>

          <span className="shop-eyebrow">
            LA COLECCIÓN
          </span>

          <h1>
            Tienda
          </h1>

        </div>

        <p>
          Piezas hechas a mano para acompañar
          tus días y tus espacios.
        </p>

      </section>

      {/* CATEGORIES */}

      <section className="shop-navigation">

        <div className="shop-filter-group">

          <span className="shop-filter-label">
            Categorías
          </span>

          <div className="shop-filters">

            <button
              type="button"
              className={
                categoryFromUrl === "todos" &&
                !showNewProducts
                  ? "active"
                  : ""
              }
              onClick={() => handleCategory("todos")}
            >
              Todos
            </button>

            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={
                  categoryFromUrl === category.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleCategory(category.id)
                }
              >
                {category.name}
              </button>
            ))}

          </div>

        </div>

        <div className="shop-filter-group">

          <span className="shop-filter-label">
            Colecciones
          </span>

          <div className="shop-filters">

            <button
              type="button"
              className={showNewProducts ? "active" : ""}
              onClick={handleNewProducts}
            >
              Novedades
            </button>

          </div>

        </div>

      </section>

      {/* RESULT HEADER */}

      <section className="shop-results-header">

        <span>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "producto"
            : "productos"}
        </span>

        <button
          type="button"
          onClick={() => {
            setSearchParams({});
          }}
        >
          Limpiar filtros
        </button>

      </section>

      {/* PRODUCTS */}

      <section className="shop-products">

        {filteredProducts.length > 0 ? (

          <div className="shop-products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="shop-empty">

            <span>
              ✦
            </span>

            <h2>
              No encontramos productos.
            </h2>

            <p>
              Probá con otra categoría o explorá
              toda la colección.
            </p>

            <button
              type="button"
              onClick={() => handleCategory("todos")}
            >
              Ver todos →
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Shop;