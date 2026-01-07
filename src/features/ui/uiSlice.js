// features/ui/uiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/** Async UI Loader (used for page transitions, layout loading etc)
 * This is Not tied to data fetching yet -- just the UI state
 */

export const setUILoading = createAsyncThunk( 
    "ui/setUILoading",
    //Simulate small delay(navigation, layout Shifts, etc)
    async (_, {dispatch}) => { 
        await new Promise((resolve) => setTimeout(resolve, 400));
    return true;
    }
);

const initialSidebarState =
  localStorage.getItem("sidebarOpen") === "false" ? false : true;

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarOpen: initialSidebarState,
    loading: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
      localStorage.setItem("sidebarOpen", state.sidebarOpen);
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
      localStorage.setItem("sidebarOpen", false);
    },
    
    startUILoading: (state) => { 
        state.loading = true;
    },
    stopUILoading: (state) => { 
        state.loading = false;
    }
  },


  extraReducer: (builder) => { 
    builder
     .addCase(setUILoading.pending, (state) => { 
        state.loading = true;
     })
     .addCase(setUILoading.fulfilled, (state) => { 
        state.loading = false;
     })
     .addCase(setUILoading.rejected, (state) => { 
        state.loading = false;
     })
  }
});

export const { toggleSidebar, closeSidebar, stopUILoading, startUILoading } = uiSlice.actions;
export default uiSlice.reducer;
