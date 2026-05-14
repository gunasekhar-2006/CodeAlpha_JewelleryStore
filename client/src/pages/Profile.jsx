import { useContext }
from "react";

import { OrderContext }
from "../context/OrderContext";

const Profile = () => {

  const {
    orders,
    cancelOrder
  } = useContext(OrderContext);

  return (

    <div className="container">

      <h1 className="section-title">
        User Profile
      </h1>

      <p>Name: Guna Sekhar</p>

      <p>Email: guna@gmail.com</p>

      <h1 className="section-title">
        Order History
      </h1>

      {
        orders.length===0
        ? (
          <p>No orders placed.</p>
        )
        : (
          orders.map((product)=>(

            <div
              className="order-card"
              key={product.id}
            >

              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <p>
                Delivery:
                3–7 working days
              </p>

              <p>
                Payment:
                Cash on Delivery
              </p>

              <p>
                Status:
                {" "}
                <span
                  style={{
                    color:
                    product.status==="Cancelled"
                    ? "red"
                    : "lightgreen",
                  }}
                >
                  {product.status}
                </span>
              </p>

              {
                product.status!=="Cancelled"
                && (
                  <button
                    className="btn"
                    onClick={() =>
                      cancelOrder(product.id)
                    }
                  >
                    Cancel Order
                  </button>
                )
              }

            </div>
          ))
        )
      }

    </div>
  );
};

export default Profile;