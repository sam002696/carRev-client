import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthContexts from "../../../hooks/useAuthContexts";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [processing, setProcessing] = useState(false);
  const { user } = useAuthContexts();

  // load all products by email
  useEffect(() => {
    setProcessing(true);
    const url = `https://carrev-server-production.up.railway.app/products`;
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setProcessing(false));
  }, [user.email]);

  return (
    <section id="my_products" className="my-products">
      <h3 className="uppercase font-semibold text-lg lg:text-2xl leading-none lg:leading-none mb-6">
        Manage Products
      </h3>
      {processing && <LoadingStatus />}
      <div className="products-wrapper flex flex-col space-y-4">
        {products.map((product, index) => (
          <ManageProduct
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ManageProducts;
