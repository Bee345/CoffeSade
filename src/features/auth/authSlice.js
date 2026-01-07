import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// Simulated login API
export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example validation
      if (!email || !password) {
        return rejectWithValue("Email and password are required");
      }

      // Simulate returned user
      const user = {
        email,
        username: email.split("@")[0],
        firstname: "John",
        lastname: "Doe",
      };

      return user;
    } catch (error) {
      return rejectWithValue("Login failed");
    }
  }
);
const initialUser = JSON.parse(localStorage.getItem("currentUser"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser || null,
    isAuthenticated: !!initialUser,
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("currentUser");
    },

    //Set Loading manually (useful for async thunk)
    setLoading: (state, action) => { 
        state.loading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
  },

  //Extra reducers for async thunks can be added here
  extraReducers: (builder) => { 
    builder.addCase(loginAsync.pending, (state) => { state.loading = true; state.error = null});
    builder.addCase(loginAsync.fulfilled, (state, action) => { state.user = action.payload; state.isAuthenticated = true; state.loading = false });
    builder.addCase(loginAsync.rejected, (state, action) => { state.loading = false; state.error = action.payload; state.isAuthenticated = false;});
  }
});

export const { loginSuccess, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
