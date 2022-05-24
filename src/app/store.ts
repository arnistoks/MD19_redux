import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';

const store = configureStore({
  reducer: {
    cartItems: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
