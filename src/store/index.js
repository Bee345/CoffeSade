// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../features/cart/cartSlice'; // All ready Created it though
// import favoritesReducer from '../features/favorite/favoritesSlice';
// import ordersReducer from '../features/orders/orderSlice';


// export const store = configureStore({
//   reducer: {
//       cart: cartReducer, // Your cart state lives here
//       favorites: favoritesReducer, // Favorites state
//         orders: ordersReducer, // Orders state
//   },

//   devTools: true, // Enables Redux DevTools for debugging
// });


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import favoritesReducer from '../features/favorite/favoritesSlice';
import ordersReducer from '../features/orders/orderSlice';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    const serializedOrders = localStorage.getItem("ordersHistory");

    return {
      cart: serializedCart ? JSON.parse(serializedCart) : undefined,
      orders: serializedOrders ? JSON.parse(serializedOrders) : undefined,
    };
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      favorites: favoritesReducer,
      orders: ordersReducer,
  },
  preloadedState, // <-- initialize store with localStorage state
  devTools: true,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();

  // Save cart and orders to localStorage
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("ordersHistory", JSON.stringify(state.orders));
});


