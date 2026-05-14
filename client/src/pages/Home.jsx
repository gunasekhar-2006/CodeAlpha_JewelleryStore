import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import products from "../data/products";

const Home = () => {

  const [search, setSearch] = useState("");

  const categories = [
    "Gold",
    "Diamond",
    "Silver",
    "Platinum",
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div>

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {
        search === ""
        && <Hero />
      }

      <div className="container">

        {
          search === ""
          && (
            <>
              <h1 className="section-title">
                Categories
              </h1>

              <div className="category-grid">

                {
                  categories.map((category,index)=>(
                    <CategoryCard
                      key={index}
                      category={category}
                    />
                  ))
                }

              </div>
            </>
          )
        }

        <h1 className="section-title">

          {
            search
            ? "Search Results"
            : "Featured Products"
          }

        </h1>

        <div
  className="product-grid"
  id="products"
>

          {
            filteredProducts.length > 0
            ? (
              filteredProducts.map((product)=>(
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            )
            : (
              <p>
                No products found.
              </p>
            )
          }

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Home;