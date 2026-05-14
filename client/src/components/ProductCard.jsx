import { useContext }
from "react";

import { Link }
from "react-router-dom";

import {
  WishlistContext
}
from "../context/WishlistContext";

import {
  OrderContext
}
from "../context/OrderContext";

const ProductCard = ({ product }) => {

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

    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.price}</p>

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
            : "Wishlist"
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

      <Link
        to={`/product/${product.id}`}
      >

        <button className="btn">
          View Details
        </button>

      </Link>

    </div>
  );
};

export default ProductCard;