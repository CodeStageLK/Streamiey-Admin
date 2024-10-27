import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  version: 12,
  currentUser: null,
  isFetching: false,
  error: false,
  userFavorites: null,
  userToken: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginStart: (state: any) => {
      state.isFetching = true;
    },

    loginSuccess: (state: any, action: any) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state: any) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state: any) => {
      if (state.version !== initialState.version) {
        return initialState;
      }
      localStorage.removeItem("persist:root");
      state.currentUser = null;
      state.userFavorites = null;
    },
    updatePrfile: (state: any, action: any) => {
      const updatedFields = action.payload;

      // Update only the fields that are present in updatedFields
      for (const field in updatedFields) {
        if (field in state.currentUser) {
          state.currentUser[field] = updatedFields[field];
        }
      }
    },

    updateFavorites: (state: any, action: any) => {
      state.userFavorites = action.payload;
    },

    saveToken: (state: any, action: any) => {
      state.userToken = action.payload;
      state.isAuthenticated = true;
    },
    deleteToken: (state: any) => {
      state.userToken = null;
      state.isAuthenticated = false;
    },
    updateIsAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updatePrfile,
  updateFavorites,
  saveToken,
  deleteToken,
  updateIsAuthenticatedStatus,
} = userSlice.actions;

export default userSlice.reducer;
