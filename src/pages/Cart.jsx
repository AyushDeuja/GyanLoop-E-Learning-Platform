import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import CartSummary from "../components/CartSummary";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import CustomButton from "../components/CustomButton";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <ShoppingCart size={96} className="text-gray-500 mb-6" />
          <h1 className="text-3xl font-bold text-gray-200 mb-2 text-center">
            Your Cart is Empty
          </h1>
          <p className="text-lg text-gray-400 mb-8 text-center max-w-xl">
            Discover amazing courses and add them to your cart to get started
            with your learning journey.
          </p>
          <CustomButton
            onClick={() => navigate("/courses")}
            label={"Browse Courses"}
            className="p-4"
          />
        </div>
      ) : (
        <div className="min-h-screen text-white px-6 py-10">
          <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          <p className="mb-6 text-lg">
            {cartItems.length} course(s) in your cart
          </p>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Course List */}
            <div className="flex-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#121212] border border-[#1f1f1f] p-4 mb-4 rounded-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1f1f1f] w-20 h-16 rounded-md flex items-center justify-center text-gray-500 text-sm">
                      Img
                    </div>
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-400">
                        by {item.instructor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary */}
            <CartSummary
              totalItems={cartItems.length}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
