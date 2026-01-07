import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Load from localStorage FIRST
const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = savedCart || {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  loading: false,
};

const saveCart = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};


// Async thunk: simulate saving cart to server
export const saveCartToServer = createAsyncThunk(
  "cart/saveCartToServer",
  async (_, { getState, rejectWithValue }) => {
    const { cart } = getState();

    try {
      // simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Normally you would call your API here:
      // await api.saveCart(cart);

      // Return the updated cart as payload
      return cart;
    } catch (err) {
      return rejectWithValue("Failed to save cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const numericPrice =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", ""))
          : item.price;

      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += numericPrice;
      } else {
        state.items.push({
          ...item,
          price: numericPrice,
          quantity: 1,
        });
        state.totalQuantity += 1;
        state.totalPrice += numericPrice;
      }

      saveCart(state); // ✅ persist


    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) return;

      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;

      saveCart(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item || item.quantity === 1) return;

      item.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;

      saveCart(state);
    },

    removeFromCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);

      saveCart(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveCart(state);
    },
  },

  extraReducers: (builder) => { 
    builder
    .addCase(saveCartToServer.pending, (state) => { 
        state.loading = true;
        state.error = null;
    })
    .addCase(saveCartToServer.fulfilled, (state, action) => {
        state.loading = false;
        //Normally update state with server response if needed
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
        state.totalPrice = action.payload.totalPrice;

        savedCart(state) // persist
    })
    .addCase(saveCartToServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

