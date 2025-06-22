// components/CartSummary.jsx
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const CartSummary = ({ totalItems, totalPrice }) => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full lg:w-1/3 bg-[#121212] border border-[#1f1f1f] rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal ({totalItems} items):</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className="border-t border-[#1f1f1f] my-3" />

      <div className="flex justify-between text-lg font-bold mb-4">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button className="w-full bg-white text-black py-2 rounded-md mb-3 font-medium">
        Checkout & Enroll
      </button>

      <button
        onClick={handleClearCart}
        className="w-full border border-[#2f2f2f] py-2 rounded-md mb-3"
      >
        Clear Cart
      </button>

      <button className="w-full text-gray-300 hover:underline">
        Continue Shopping
      </button>
    </div>
  );
};

export default CartSummary;
