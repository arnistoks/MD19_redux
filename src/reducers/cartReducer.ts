import { createSlice } from '@reduxjs/toolkit';
import { Lawnmower } from '../data/data';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Lawnmower[],
  },
  reducers: {
    addItem: (state:{value: Lawnmower[]}, action: {payload: Lawnmower}) => {
      state.value = [...state.value, action.payload];
    },
    plusItem: (state:{value: Lawnmower[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((element) => element.id === action.payload).quantity += 1;
    },
    minusItem: (state:{value: Lawnmower[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((element) => element.id === action.payload).quantity -= 1;
    },
    removeItem: (state:{value: Lawnmower[]}, action: {payload: number}) => {
      state.value.slice(action.payload, 1);
    },
  },
});

export const {
  addItem, plusItem, minusItem, removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
