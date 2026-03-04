import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    addItem: (state, action) => {

      const item = state.items.find(
        item => item.name === action.payload.name
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }

    },

    removeItem: (state, action) => {

      state.items = state.items.filter(
        item => item.name !== action.payload
      );

    },

    updateQuantity: (state, action) => {

      const { name, amount } = action.payload;

      const item = state.items.find(
        item => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }

    }

  }

});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;