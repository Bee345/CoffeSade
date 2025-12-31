import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // All ready Created it though
import favoritesReducer from '../features/favorite/favoritesSlice';
import ordersReducer from '../features/orders/orderSlice';


export const store = configureStore({
  reducer: {
      cart: cartReducer, // Your cart state lives here
      favorites: favoritesReducer, // Favorites state
        orders: ordersReducer, // Orders state
  },
  devTools: true, // Enables Redux DevTools for debugging
});

