import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetProductData() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const productResponse = await axios.get("product");
      setProductData(productResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { productData };
}
