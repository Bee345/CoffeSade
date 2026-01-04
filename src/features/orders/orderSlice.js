import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// Helper: Get current user from localStorage
const getCurrentUser = () => JSON.parse(localStorage.getItem("currentUser") || "{}");

// Helper: Get user's orders key
const getOrdersKey = (user = getCurrentUser()) => `orders_${user.email || "guest"}`;

// Initial state loader
const loadInitialOrders = () => {
  const user = getCurrentUser();
  if (!user.email) return [];
  const saved = localStorage.getItem(getOrdersKey(user));
  return JSON.parse(saved || "[]");
};

const initialState = {
  orders: [...loadInitialOrders()],
  successOrder: null, // For storing last successful order
  loading: false, // Global loading for async actions
  error: null, // Error handling
};

// Async: Place order from current cart
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const { cart } = state; // Assume cart slice has 'cart' with items/total
    const user = getCurrentUser();

    if (!user.email) {
      return rejectWithValue("Not authenticated");
    }
    if (cart.items.length === 0) {
      return rejectWithValue("Cart is empty");
    }

    const { items, totalPrice } = cart; // Pull from cart state

    const newOrder = {
      id: nanoid(),
      userEmail: user.email,
      items, // Full cart items
      totalPrice,
      date: new Date().toISOString(),
      status: "pending",
      loyaltySaved: totalPrice * 0.1, // Example: 10% loyalty savings
      details: items.map(item => ({ // For backward compat with your component
        name: item.name,
        qty: item.quantity || 1,
        price: item.price,
      })),
      updates: [
        { timestamp: new Date().toISOString(), message: "Order placed", icon: "Clock" },
      ],
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const updatedOrders = [...state.orders.orders, newOrder];
    localStorage.setItem(getOrdersKey(user), JSON.stringify(updatedOrders));
    return { newOrder, updatedOrders };
  }
);

// Async: Update order status (with mock "tracking")
export const trackOrderUpdate = createAsyncThunk(
  "orders/trackOrderUpdate",
  async ({ orderId, status }, { getState, rejectWithValue }) => {
    const state = getState();
    const user = getCurrentUser();
    if (!user.email) return rejectWithValue("Not authenticated");

    // Simulate tracking delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newStatus = status || (state.orders.orders.find(o => o.id === orderId)?.status === "pending" ? "preparing" : "delivered");
    const updatedOrders = state.orders.orders.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: newStatus,
          updates: [...order.updates, {
            timestamp: new Date().toISOString(),
            message: `${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}`,
            icon: newStatus === "delivered" ? "CheckCircle" : "Package",
          }],
        };
      }
      return order;
    });

    localStorage.setItem(getOrdersKey(user), JSON.stringify(updatedOrders));
    return { orderId, status: newStatus, updatedOrders };
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Sync actions (e.g., remove)
    removeOrder: (state, action) => {
      const orderId = action.payload;
      const updated = state.orders.filter(o => o.id !== orderId);
      const user = getCurrentUser();
      if (user.email) {
        localStorage.setItem(getOrdersKey(user), JSON.stringify(updated));
      }
      state.orders = updated;
    },
    clearOrders: (state) => {
      state.orders = [];
      const user = getCurrentUser();
      if (user.email) {
        localStorage.removeItem(getOrdersKey(user));
      }
    },
    // New: Manual set for initial load or sync
    setOrders: (state, action) => {
      state.orders = action.payload;
      const user = getCurrentUser();
      if (user.email) {
        localStorage.setItem(getOrdersKey(user), JSON.stringify(action.payload));
      }
    },


    setSuccessOrder: (state, action) => {
        state.successOrder = action.payload; //save the order to state
        state.orders.push(action.payload); // Optionally keeps full History
    },

    clearSuccessOrder: (state) => {
        state.orders = [];
        state.successOrder = null;
  },
  extraReducers: (builder) => {
    builder
      // placeOrder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.updatedOrders;
        state.successOrder = action.payload.newOrder; // Save successful order
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // trackOrderUpdate
      .addCase(trackOrderUpdate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trackOrderUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.updatedOrders;
      })
      .addCase(trackOrderUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
}
});

export const { removeOrder, clearOrders, setOrders, clearSuccessOrder, setSuccessOrder } = orderSlice.actions;
export default orderSlice.reducer;


// import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// /* ---------------- HELPERS ---------------- */

// const getCurrentUser = () =>
//   JSON.parse(localStorage.getItem("currentUser") || "{}");

// const getOrdersKey = (user = getCurrentUser()) =>
//   `orders_${user.email || "guest"}`;

// const loadInitialOrders = () => {
//   const user = getCurrentUser();
//   if (!user.email) return [];
//   const saved = localStorage.getItem(getOrdersKey(user));
//   return JSON.parse(saved || "[]");
// };

// /* ---------------- INITIAL STATE ---------------- */

// const initialState = {
//   orders: loadInitialOrders(),
//   successOrder: null, // ✅ NEW
//   loading: false,
//   error: null,
// };

// /* ---------------- ASYNC: PLACE ORDER ---------------- */

// export const placeOrder = createAsyncThunk(
//   "orders/placeOrder",
//   async (orderSnapshot, { getState, rejectWithValue }) => {
//     const state = getState();
//     const user = getCurrentUser();

//     if (!user.email) return rejectWithValue("Not authenticated");

//     const newOrder = {
//       ...orderSnapshot,
//       id: nanoid(),
//       userEmail: user.email,
//       status: "pending",
//       loyaltySaved: orderSnapshot.total * 0.1,
//       updates: [
//         {
//           timestamp: new Date().toISOString(),
//           message: "Order placed",
//           icon: "Clock",
//         },
//       ],
//     };

//     await new Promise((res) => setTimeout(res, 1000));

//     const updatedOrders = [...state.orders.orders, newOrder];
//     localStorage.setItem(getOrdersKey(user), JSON.stringify(updatedOrders));

//     return { newOrder, updatedOrders };
//   }
// );

// /* ---------------- ASYNC: TRACK ORDER ---------------- */

// export const trackOrderUpdate = createAsyncThunk(
//   "orders/trackOrderUpdate",
//   async ({ orderId, status }, { getState, rejectWithValue }) => {
//     const state = getState();
//     const user = getCurrentUser();
//     if (!user.email) return rejectWithValue("Not authenticated");

//     await new Promise((res) => setTimeout(res, 1500));

//     const updatedOrders = state.orders.orders.map((order) =>
//       order.id === orderId
//         ? {
//             ...order,
//             status,
//             updates: [
//               ...order.updates,
//               {
//                 timestamp: new Date().toISOString(),
//                 message: status,
//                 icon: status === "delivered" ? "CheckCircle" : "Package",
//               },
//             ],
//           }
//         : order
//     );

//     localStorage.setItem(getOrdersKey(user), JSON.stringify(updatedOrders));
//     return { updatedOrders };
//   }
// );

// /* ---------------- SLICE ---------------- */

// const orderSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     /* ✅ SAVE SUCCESS ORDER */
//     setSuccessOrder: (state, action) => {
//       state.successOrder = action.payload;
//     },

//     /* ✅ CLEAR SUCCESS ORDER */
//     clearSuccessOrder: (state) => {
//       state.successOrder = null;
//     },

//     removeOrder: (state, action) => {
//       const updated = state.orders.filter(
//         (o) => o.id !== action.payload
//       );
//       state.orders = updated;

//       const user = getCurrentUser();
//       if (user.email) {
//         localStorage.setItem(getOrdersKey(user), JSON.stringify(updated));
//       }
//     },

//     clearOrders: (state) => {
//       state.orders = [];
//       state.successOrder = null;

//       const user = getCurrentUser();
//       if (user.email) {
//         localStorage.removeItem(getOrdersKey(user));
//       }
//     },

//     setOrders: (state, action) => {
//       state.orders = action.payload;

//       const user = getCurrentUser();
//       if (user.email) {
//         localStorage.setItem(
//           getOrdersKey(user),
//           JSON.stringify(action.payload)
//         );
//       }
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(placeOrder.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(placeOrder.fulfilled, (state, action) => {
//         state.loading = false;
//         state.orders = action.payload.updatedOrders;
//       })
//       .addCase(placeOrder.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(trackOrderUpdate.fulfilled, (state, action) => {
//         state.orders = action.payload.updatedOrders;
//       });
//   },
// });

// export const {
//   setSuccessOrder,
//   clearSuccessOrder,
//   removeOrder,
//   clearOrders,
//   setOrders,
// } = orderSlice.actions;

// export default orderSlice.reducer;
