import useGetProductData from "../../hooks/useGetProductData";
import SingleProduct from "./SingleProduct";

export default function Product() {
  const { productData } = useGetProductData();
  return (
    <>
      <div className="flex justify-evenly flex-wrap">
        {productData?.map((data) => (
          <SingleProduct productData={data} key={data?.id} />
        ))}
      </div>
    </>
  );
}
