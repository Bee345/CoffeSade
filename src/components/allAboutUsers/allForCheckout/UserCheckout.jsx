import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../../features/cart/cartSlice"; // Clear cart after order
import { setSuccessOrder } from "../../../features/orders/orderSlice"; // Save successful order
import { Truck, CreditCard, CheckCircle, X } from "lucide-react"; // Icons for shipping, payment, confirmation

const UserCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const [user] = useState(() => JSON.parse(localStorage.getItem("currentUser") || "{}")); // Fetch user once
  const [step, setStep] = useState(1); // 1: Review, 2: Shipping, 3: Payment, 4: Confirmation
  const [shippingAddress, setShippingAddress] = useState(typeof user.address === 'string' ? user.address : ""); // Pre-fill from profile
  const [paymentMethod, setPaymentMethod] = useState("card"); // card, paypal, etc.
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({}); // Validation errors
  const [isProcessing, setIsProcessing] = useState(false); // Loading state

  const {successOrder} = useSelector(state => state.orders); // Get last successful order from orders slice


  // Calculate totals (with mock tax/shipping)
  const subtotal = totalPrice;
  const tax = subtotal * 0.08; // 8% tax
  const shipping = totalQuantity > 0 ? 5.99 : 0; // Flat fee
  const grandTotal = subtotal + tax + shipping;

  // Validate payment
  const validatePayment = () => {
    const newErrors = {};
    if (paymentMethod === "card") {
      if (!cardNumber || cardNumber.length < 16) newErrors.cardNumber = "Card number must be 16 digits.";
      if (!expiry || expiry.length < 5) newErrors.expiry = "Expiry must be MM/YY.";
      if (!cvv || cvv.length < 3) newErrors.cvv = "CVV must be 3-4 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle place order (mock—integrate Stripe/API)
  const handlePlaceOrder = async () => {
    if (!validatePayment()) {
      setStep(3); // Jump to payment if errors
      return;
    }

    setIsProcessing(true);
    try {
      // Mock API call (1s delay)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save order to localStorage (mock)
      const orderSnapshot = {
  id: Date.now(),
  items: [...items],
  subtotal,
  tax,
  shipping,
  total: grandTotal,
  address: shippingAddress,
  paymentMethod,
  date: new Date().toISOString(),
};
dispatch(setSuccessOrder(orderSnapshot)); // Save successful order to Redux
      // Clear cart
      dispatch(clearCart());
      setStep(4); // Confirmation
    } catch (err) {
      alert("Order failed—try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Steps
  if (step === 4) { // Confirmation
    return (
      <div className="max-w-md mt-50 mx-auto p-6 bg-amber-300 rounded-lg shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-4">Order Confirmed!</h2>
        <p className="text-center text-gray-600 mb-6">Thank you for your purchase. Order # {successOrder?.id} placed successfully.</p>
        <div className="space-y-2 text-sm text-gray-600">
            <div className="mt-4 space-y-2 text-sm">
  {successOrder?.items?.map(item => (
    <div key={item.id} className="flex justify-between">
      <span>{item.name} x {item.quantity}</span>
      <span>${((typeof item.price === "number" ? item.price : parseFloat(item.price.replace("$", "")) || 0) * item.quantity).toFixed(2)}</span>

    </div>
  ))}
</div>
          <p>Total: ${successOrder?.total.toFixed(2)}</p>
          <p>Shipping to: {shippingAddress || "Saved Address"}</p>
        </div>
        <button
          onClick={() => navigate("/app")}
          className="w-full mt-6 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-8 px-4 bg-[#EDE5DC]">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {["Review Cart", "Shipping", "Payment", "Complete"].map((label, idx) => (
            <div key={idx} className="flex-1 text-center">
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold ${
                step > idx + 1 ? "bg-green-500 text-white " : step === idx + 1 ? "bg-amber-400 dark:bg-amber-700 text-white" : "bg-gray-200 text-gray-600"
              }`}>
                {idx + 1}
              </div>
              <p className="text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Step 1: Cart Review */}
        {step === 1 && (
          <div className="bg-gray-300 dark:bg-slate-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Review Your Cart</h2>
            <ul className="space-y-4 mb-6">
              {items.map((item) => {
                const numericPrice = typeof item.price === 'number' ? item.price : item.price?.amount || 0;
                const lineTotal = numericPrice * item.quantity;
                return (
                  <li key={item.id} className="flex justify-between items-center border-b py-2">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity} x ${numericPrice.toFixed(2)}</p>
                    </div>
                    <p className="font-bold">${lineTotal.toFixed(2)}</p>
                  </li>
                );
              })}
            </ul>
            <div className="space-y-2 text-right">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax (8%): ${tax.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <p className="text-xl font-bold">Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full mt-6 bg-amber-400 dark:bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-600"
            >
              Proceed to Shipping
            </button>
          </div>
        )}

        {/* Step 2: Shipping */}
        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <textarea
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter full address..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 mb-4"
              rows={3}
            />
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-amber-400 dark:bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-600"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4 mb-6">
              <label className="flex items-center">
                <input type="radio" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-2" />
                <CreditCard className="mr-2" size={20} /> Credit Card
              </label>
              <label className="flex items-center">
                <input type="radio" value="paypal" checked={paymentMethod === "paypal"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-2" />
                PayPal
              </label>
            </div>
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                  maxLength={16}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    maxLength={4}
                    className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    maxLength={4}
                    className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
              </div>
            )}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="flex-1 bg-amber-400 dark:bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-600 disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : `Place Order - $${grandTotal.toFixed(2)}`}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserCheckout;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../../../features/cart/cartSlice";
// import { CreditCard, CheckCircle } from "lucide-react";

// const UserCheckout = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { items, totalQuantity, totalPrice } = useSelector(
//     (state) => state.cart
//   );

//   const [user] = useState(() =>
//     JSON.parse(localStorage.getItem("currentUser") || "{}")
//   );

//   const [step, setStep] = useState(1);
//   const [shippingAddress, setShippingAddress] = useState(user.address || "");
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isProcessing, setIsProcessing] = useState(false);

//   // ✅ SNAPSHOT ORDER
//   const [successOrder, setSuccessOrder] = useState(null);

//   /* ------------------ CALCULATIONS ------------------ */
//   const subtotal = totalPrice;
//   const tax = subtotal * 0.08;
//   const shipping = totalQuantity > 0 ? 5.99 : 0;
//   const grandTotal = subtotal + tax + shipping;

//   /* ------------------ VALIDATION ------------------ */
//   const validatePayment = () => {
//     const newErrors = {};
//     if (paymentMethod === "card") {
//       if (!cardNumber || cardNumber.length < 16)
//         newErrors.cardNumber = "Card number must be 16 digits";
//       if (!expiry || expiry.length < 4)
//         newErrors.expiry = "Expiry is required";
//       if (!cvv || cvv.length < 3)
//         newErrors.cvv = "CVV is required";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   /* ------------------ PLACE ORDER ------------------ */
//   const handlePlaceOrder = async () => {
//     if (!validatePayment()) return;

//     setIsProcessing(true);

//     try {
//       await new Promise((res) => setTimeout(res, 1000));

//       const orderSnapshot = {
//         id: Date.now(),
//         items: [...items],
//         subtotal,
//         tax,
//         shipping,
//         total: grandTotal,
//         address: shippingAddress,
//         paymentMethod,
//         date: new Date().toISOString(),
//       };

//       // ✅ SAVE SNAPSHOT
//       setSuccessOrder(orderSnapshot);

//       // ✅ CLEAR CART AFTER SNAPSHOT
//       dispatch(clearCart());

//       setStep(4);
//     } catch (err) {
//       alert("Order failed");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   /* ------------------ SUCCESS SCREEN ------------------ */
//   if (step === 4 && successOrder) {
//     return (
//       <div className="max-w-md mt-40 mx-auto p-6 bg-amber-300 rounded-lg shadow-lg">
//         <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

//         <h2 className="text-2xl font-bold text-center mb-2">
//           Order Confirmed
//         </h2>

//         <p className="text-center text-sm text-gray-700 mb-4">
//           Order #{successOrder.id}
//         </p>

//         <div className="bg-white rounded-lg p-4 mb-4">
//           <h3 className="font-semibold mb-2">Items Purchased</h3>
//           <ul className="space-y-2 text-sm">
//             {successOrder.items.map((item) => {
//               const price =
//                 typeof item.price === "number"
//                   ? item.price
//                   : parseFloat(item.price.replace("$", "")) || 0;

//               return (
//                 <li key={item.id} className="flex justify-between">
//                   <span>
//                     {item.name} × {item.quantity}
//                   </span>
//                   <span>${(price * item.quantity).toFixed(2)}</span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="text-sm space-y-1 text-gray-700">
//           <p>Subtotal: ${successOrder.subtotal.toFixed(2)}</p>
//           <p>Tax: ${successOrder.tax.toFixed(2)}</p>
//           <p>Shipping: ${successOrder.shipping.toFixed(2)}</p>
//           <p className="font-bold text-lg">
//             Total Paid: ${successOrder.total.toFixed(2)}
//           </p>
//         </div>

//         <p className="mt-3 text-sm text-gray-600">
//           Shipping to: {successOrder.address}
//         </p>

//         <button
//           onClick={() => navigate("/app")}
//           className="w-full mt-6 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     );
//   }

//   /* ------------------ NORMAL CHECKOUT UI ------------------ */
//   return (
//     <div className="min-h-screen py-8 px-4 bg-[#EDE5DC]">
//       <div className="max-w-4xl mx-auto">

//         {/* STEP 1, 2, 3 UI remains unchanged */}
//         {/* I intentionally did NOT rewrite what already works */}

//       </div>
//     </div>
//   );
// };

// export default UserCheckout;
