import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10 dark:bg-black">
      <h1 className="text-2xl font-bold dark:text-white">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white dark:bg-gray-200 dark:text-black rounded-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <div className="md:w-6/12 mx-auto bg-gray-200 p-5 my-4 shadow-lg">
          <ItemsList items={cartItems} />
        </div>
      ) : (
        <div className="h-[calc(100vh-400px)] flex justify-center items-center">
          <h1 className="text-lg">Your cart is empty, add items to cart!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
