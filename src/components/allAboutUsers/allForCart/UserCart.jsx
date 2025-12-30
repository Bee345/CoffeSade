import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../../../features/cart/cartSlice.js'; // Adjust path
import { useNavigate } from 'react-router-dom';

function UserCart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Helper to parse price (handles string "$3.50" or number 3.50; fixes NaN/type error)
  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr; // Already number from slice
    if (typeof priceStr === 'string') return parseFloat(priceStr.replace("$", "")) || 0; // Parse string
    return 0; // Fallback for undefined/null
  };

  if (totalQuantity === 0) {
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart ({totalQuantity} items)</h2>
      <ul className="space-y-4">
        {items.map((item) => {
          const numericPrice = parsePrice(item.price); // Safe parse (no replace error)
          const lineTotal = numericPrice * (item.quantity || 0); // Safe multiply, fallback quantity

          return (
            <li key={item.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {typeof item.price === 'string' ? item.price : `$${numericPrice.toFixed(2)}`} each
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity || 0}</span>
                <button
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-gray-500 text-white px-2 py-1 rounded ml-2"
                >
                  Remove
                </button>
                <p>${lineTotal.toFixed(2)}</p> {/* Safe line total */}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${parseFloat(totalPrice || 0).toFixed(2)}</p> {/* Safe grand total */}
        
   {/* Inside the component, after the total div:*/}
    

 <p>Total: ${totalPrice.toFixed(2)}</p>:
<button
  onClick={() => navigate('/app/checkout')}
  className="bg-blue-500 text-white px-6 py-2 rounded mt-2"
  disabled={totalQuantity === 0}
>
  Proceed to Checkout
</button>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-6 py-2 rounded mt-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default UserCart;