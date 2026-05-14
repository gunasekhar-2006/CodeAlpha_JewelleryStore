import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {

  const { name } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() ===
      name.toLowerCase()
  );

  return (
    <div className="container">

      <h1 style={{marginTop:"40px"}}>
        {name} Jewellery
      </h1>

      <div className="product-grid">

        {
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }

      </div>

    </div>
  );
};

export default CategoryPage;