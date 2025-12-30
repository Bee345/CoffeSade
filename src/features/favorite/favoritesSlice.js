import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.find(i => i.id === item.id);

      if (exists) {
        return state.filter(i => i.id !== item.id);
      } else {
        const updated = [...state, item];
        localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      }
    },

    removeFavorite: (state, action) => {
      const updated = state.filter(i => i.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    }
  }
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
