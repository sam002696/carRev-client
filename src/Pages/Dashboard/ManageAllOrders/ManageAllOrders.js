import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import ManageOrderItem from "../ManageOrderItem/ManageOrderItem";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [processing, setProcessing] = useState(false);

  // load all orders by email
  useEffect(() => {
    setProcessing(true);
    const url = `https://carrev-server-production.up.railway.app/orders`;
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setProcessing(false));
  }, []);

  return (
    <section id="manage_all_orders" className="manage-all-orders">
      <h3 className="uppercase font-semibold text-lg lg:text-2xl leading-none lg:leading-none mb-6">
        Manage All Orders
      </h3>
      {processing && <LoadingStatus />}
      <div className="orders-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-10 sm:gap-x-4 md:gap-y-6">
        {orders.map((order, index) => (
          <ManageOrderItem
            key={order._id}
            order={order}
            orders={orders}
            setOrders={setOrders}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ManageAllOrders;
