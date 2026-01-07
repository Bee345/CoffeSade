import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// Helpers
const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser") || "{}");

const getOrdersKey = (user) =>
  `orders_${user.email || "guest"}`;

const loadOrders = () => {
  const user = getCurrentUser();
  if (!user.email) return [];
  return JSON.parse(localStorage.getItem(getOrdersKey(user)) || "[]");
};

const saveOrders = (user, orders) => {
  if (user.email) {
    localStorage.setItem(getOrdersKey(user), JSON.stringify(orders));
  }
};

const initialState = {
  orders: loadOrders(),
  successOrder: null,
  loading: false,
  error: null,
};

// ✅ PLACE ORDER
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (_, { getState, rejectWithValue }) => {
    const { cart } = getState();
    const user = getCurrentUser();

    if (!user.email) return rejectWithValue("Not authenticated");
    if (!cart.items.length) return rejectWithValue("Cart is empty");

    const newOrder = {
      id: nanoid(),
      userEmail: user.email,
      items: cart.items,
      totalPrice: cart.totalPrice,
      date: new Date().toISOString(),
      status: "pending",
      updates: [
        {
          timestamp: new Date().toISOString(),
          message: "Order placed",
        },
      ],
    };

    await new Promise(r => setTimeout(r, 800));

    const existingOrders = loadOrders();
    const updatedOrders = [newOrder, ...existingOrders];

    saveOrders(user, updatedOrders);

    return { newOrder, updatedOrders };
  }
);

// ✅ TRACK ORDER
export const trackOrderUpdate = createAsyncThunk(
  "orders/trackOrderUpdate",
  async ({ orderId, status }, { getState }) => {
    const user = getCurrentUser();
    const orders = getState().orders.orders;

    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? {
            ...order,
            status,
            updates: [
              ...order.updates,
              {
                timestamp: new Date().toISOString(),
                message: status,
              },
            ],
          }
        : order
    );

    saveOrders(user, updatedOrders);
    return updatedOrders;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeOrder: (state, action) => {
      const user = getCurrentUser();
      state.orders = state.orders.filter(o => o.id !== action.payload);
      saveOrders(user, state.orders);
    },

    clearOrders: (state) => {
      const user = getCurrentUser();
      state.orders = [];
      localStorage.removeItem(getOrdersKey(user));
    },

    setOrders: (state, action) => {
      const user = getCurrentUser();
      state.orders = action.payload;
      saveOrders(user, action.payload);
    },

    clearSuccessOrder: (state) => {
      state.successOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.updatedOrders;
        state.successOrder = action.payload.newOrder;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Track Order
      .addCase(trackOrderUpdate.pending, (state) => { 
        state.loading - true;
        state.error = null;
      })
      .addCase(trackOrderUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(trackOrderUpdate.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error?.message;
      });
  },
});

export const {
  removeOrder,
  clearOrders,
  setOrders,
  clearSuccessOrder,
} = orderSlice.actions;

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
