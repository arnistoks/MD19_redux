import { createSlice } from '@reduxjs/toolkit';
import lawnmowers from '../data/data';

export const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    items: lawnmowers,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },
    decreaseCount: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.count -= 1;
        } return i;
      });
    },
    increaseQuantity: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.quantity += 1;
        }
        return i;
      });
    },
    decreaseQuantity: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.quantity -= 1;
        } return i;
      });
    },
    addToCart: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.inCart = true;
          i.quantity += i.count;
        }
        return i;
      });
    },
    removeFromCart(state, action) {
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.inCart = false;
          i.quantity = 0;
        }
        return i;
      });
    },
    resetCount(state, action) {
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count = 1;
        } return i;
      });
    },
  },
});

export const {
  increaseCount, decreaseCount, increaseQuantity, decreaseQuantity, addToCart, removeFromCart, resetCount,
} = cartSlice.actions;

export default cartSlice.reducer;
