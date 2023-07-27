import { Link } from "react-router-dom";
import Product from "./Product";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setDefaultCount } from "../../utils/cartSlice";
import { useEffect } from "react";

export default function DashBoard() {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDefaultCount());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-between mt-4">
        <h1 className="ml-4 text-2xl font-sans font-medium text-gray-400 cursor-pointer">
          Dash<span className="text-green-500">Board</span>
        </h1>
        <div className="cursor-pointer">
          <AiOutlineShoppingCart className="text-2xl text-orange-500" />
          <span className="absolute top-4 right-[47%] text-md">{count}</span>
        </div>

        <Link
          onClick={() => {
            localStorage.removeItem("token");
          }}
          to="/"
          className="mr-4 p-1 bg-orange-500 text-white w-20 text-lg cursor-pointer text-center rounded-md"
        >
          Logout
        </Link>
      </div>
      <Product />
    </>
  );
}
