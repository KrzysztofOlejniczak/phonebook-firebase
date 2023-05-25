import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const userId = await auth.currentUser.uid;
      const contacts = [];
      const querySnapshot = await getDocs(collection(db, userId));
      querySnapshot.forEach((doc) => {
        contacts.push({ ...doc.data(), id: doc.id });
      });
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const userId = await auth.currentUser.uid;
      const docRef = await addDoc(collection(db, userId), {
        name,
        number,
      });
      return { name, number, id: docRef.id };
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const userId = await auth.currentUser.uid;
      await updateDoc(doc(db, userId, contactId), { name, number });
      return { id: contactId, name, number };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const userId = await auth.currentUser.uid;
      await deleteDoc(doc(db, userId, contactId));
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
