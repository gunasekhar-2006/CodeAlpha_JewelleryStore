import { useParams }
from "react-router-dom";

import { useContext }
from "react";

import products
from "../data/products";

import {
  WishlistContext
}
from "../context/WishlistContext";

import {
  OrderContext
}
from "../context/OrderContext";

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find(
    (item) =>
      item.id === parseInt(id)
  );

  const {
    wishlist,
    addToWishlist
  } = useContext(WishlistContext);

  const {
    placeOrder
  } = useContext(OrderContext);

  const exists = wishlist.find(
    (item) => item.id === product.id
  );

  return (

    <div className="container">

      <div className="details-page">

        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{product.name}</h1>

          <h2>{product.price}</h2>

          <p>
            {product.description}
          </p>

          <p>
            Premium luxury jewellery
            crafted with elegance
            and perfection.
          </p>

          <div className="product-buttons">

            <button
              className="btn"
              onClick={() => {

                if(!exists){

                  addToWishlist(product);

                  alert(
                    "Added to Wishlist"
                  );

                }else{

                  alert(
                    "Already in Wishlist"
                  );
                }
              }}
            >

              {
                exists
                ? "Wishlisted"
                : "Add to Wishlist"
              }

            </button>

            <button
              className="btn"
              onClick={() =>
                placeOrder(product)
              }
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;