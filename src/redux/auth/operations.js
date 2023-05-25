import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  // sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "../../firebase";

/*
 * REGISTER body: { email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // sendEmailVerification(auth.currentUser);
      return userCredential.user.toJSON();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * LOGIN body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.toJSON();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * SIGNOUT
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * REFRESHUSER
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              unsubscribe();
              resolve(user.toJSON());
              return;
            }
            reject();
          },
          (error) => {
            unsubscribe();
            rejectWithValue(error.message);
          }
        );
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
