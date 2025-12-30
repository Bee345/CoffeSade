import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // All ready Created it though
import favoritesReducer from '../features/favorite/favoritesSlice';

export const store = configureStore({
  reducer: {
      cart: cartReducer, // Your cart state lives here
      favorites: favoritesReducer, // Favorites state
  },
  devTools: true, // Enables Redux DevTools for debugging
});

