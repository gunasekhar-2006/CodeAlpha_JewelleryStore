import {
  createContext,
  useState,
  useEffect
} from "react";

export const OrderContext =
  createContext();

const OrderProvider = ({ children }) => {

  const [orders, setOrders] = useState(() => {

    const storedOrders =
      localStorage.getItem("orders");

    return storedOrders
      ? JSON.parse(storedOrders)
      : [];
  });

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  const placeOrder = (product) => {

    const newOrder = {
      ...product,
      status:"Ordered",
    };

    setOrders([...orders, newOrder]);

    alert(
      "Order placed successfully.\nDelivery within 3–7 working days.\nPayment Mode: Cash on Delivery"
    );
  };

  const cancelOrder = (id) => {

    const updatedOrders =
      orders.map((order)=>{

        if(order.id===id){

          return {
            ...order,
            status:"Cancelled",
          };
        }

        return order;
      });

    setOrders(updatedOrders);

    alert("Order Cancelled");
  };

  return (

    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        cancelOrder,
      }}
    >

      {children}

    </OrderContext.Provider>
  );
};

export default OrderProvider;