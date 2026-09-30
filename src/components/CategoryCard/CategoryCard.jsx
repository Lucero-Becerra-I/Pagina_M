import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/tienda?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <div className="category-icon">
        {category.icon}
      </div>

      <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>

      <span className="category-arrow">
        →
      </span>
    </Link>
  );
}

export default CategoryCard;