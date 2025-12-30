import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price:number, quantity }
  totalQuantity: 0,
  totalPrice: 0, // ALWAYS number
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item or increase quantity
    addToCart: (state, action) => {
  const item = action.payload;
  const numericPrice = parseFloat(item.price.replace("$", "")) || 0; // 🔑 Normalize price

  const existingItem = state.items.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    // Immutable update: Map to new array, increment quantity
    state.items = state.items.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    state.totalQuantity += 1;
    state.totalPrice += numericPrice; // Increment by single item price
  } else {
    // New item: Push new object with numeric price
    state.items.push({
      ...item,
      price: numericPrice, // 🔑 Store as number, not string
      quantity: 1,
    });
    state.totalQuantity += 1;
    state.totalPrice += numericPrice * 1; // * 1 for clarity
  }
},

    // Increase quantity
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item) return;

      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price; // already number
    },

    // Decrease quantity (STOP at 1)
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item || item.quantity === 1) return; // 🔒 disable at 1

      item.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;
    },

    // Remove entire item
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;

      state.items = state.items.filter(
        (cartItem) => cartItem.id !== id
      );
    },

    // Clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
