import { createSlice } from "@reduxjs/toolkit";

// 1: Get Saved theme or system preference 
const getInitialTheme = () => { 
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark") return true;
    if(savedTheme === "light") return false;

    // System Prefrence 
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: getInitialTheme(),
  },
  reducers: {
    toggleTheme(state)  {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
    setTheme(state, action) {
      state.isDarkMode = action.payload;
      localStorage.setItem("theme", action.payload ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
