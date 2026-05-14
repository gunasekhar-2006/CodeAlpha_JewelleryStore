import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (

    <Link to={`/category/${category}`}>

      <div className="category-card">
        <h2>{category}</h2>
      </div>

    </Link>
  );
};

export default CategoryCard;