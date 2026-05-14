import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {

  const {
    wishlist,
    removeFromWishlist
  } = useContext(WishlistContext);

  return (
    <div className="container">

      <h1 style={{ marginTop: "40px" }}>
        Wishlist
      </h1>

      <div
  className="product-grid"
  id="products"
>

        {
          wishlist.map((product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <button
                className="btn"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >
                Remove
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default Wishlist;