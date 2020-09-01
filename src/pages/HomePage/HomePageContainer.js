import React from "react";
import api from "../../api";
import "./HomePage.css";

import HomePage from "./HomePage";

const HomePageContainer = () => {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    api.products.getByBarcode("8966756").then((data) => {
      setProduct(data);
    });
  }, [setProduct]);

  return <HomePage product={product} />;
};

export default HomePageContainer;
