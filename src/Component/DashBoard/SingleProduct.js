import { useDispatch } from "react-redux";
import { cartCount } from "../../utils/cartSlice";

export default function SingleProduct({ productData }) {
  const { name, image, details } = productData;
  const dispatch = useDispatch();

  return (
    <>
      <div className=" w-80 h-80 rounded-lg mt-4 shadow-lg cursor-pointer">
        <h1 className="text-center mt-1 text-xl font-medium text-gray-500">
          {name}
        </h1>
        <img
          src={image}
          alt="product"
          className="object-cover w-full h-40 mt-4 p-1 "
        />
        <p className="text-center font-normal text-md mt-2">{details}</p>
        <div className="ml-4 mt-2">
          <button
            onClick={() => {
              dispatch(cartCount());
            }}
            className=" bg-orange-500 rounded-md p-1 w-20 text-center text-md text-white"
          >
            CartItem
          </button>
        </div>
      </div>
    </>
  );
}
