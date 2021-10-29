/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import {
  createCart,
  getCart,
  updateCart,
  deleteCart,
  addPayment
} from '../asyncActions/cart.asyncAction';
// let data = JSON.parse(localStorage.getItem('cart'));
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    searchValue: '',
  },
  reducers: {
    clearStateCart: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: {
    //* addPayment
    [addPayment.pending]: (state, action) => {
    },
    [addPayment.fulfilled]: (state, action) => {
      // if (action.payload) {
      //   console.log(action.payload);
      //   state.cart = [];
      //   localStorage.removeItem('cart');
      // }
    },
    [addPayment.rejected]: (state, action) => {
    },

    //* get cart
    [getCart.pending]: (state, action) => {
    },
    [getCart.fulfilled]: (state, action) => {
      // if (action.payload) {
      //   state.cart = action.payload;
      // }
    },
    [getCart.rejected]: (state, action) => {
    },

    // create
    [createCart.pending]: (state, action) => {
    },
    [createCart.fulfilled]: (state, action) => {
      // if (action.payload) {
      //   let idProductAction = action.payload.product.id;
      //   var index = state.cart ? state.cart.map((item) => item.product.id).indexOf(idProductAction) : -1;
      //   if(index !== -1){
      //       state.cart[index].quantity += action.payload.quantity;
      //   } else {
      //       state.cart = [action.payload, ...state.cart];
      //   }
      //   localStorage.setItem('cart', JSON.stringify(state.cart));
      // }
    },
    [createCart.rejected]: (state, action) => {
        console.log('sai');
    },

    //delete
    [deleteCart.pending]: (state, action) => {
    },
    [deleteCart.fulfilled]: (state, action) => {
      // if (action.payload){
      //   console.log(action.payload);
      //   let index = state.cart.map((item) => item.product.id).indexOf(action.payload.product.id);
      //   state.cart.splice(index, 1);
      //   localStorage.setItem('cart', JSON.stringify(state.cart));
      // }
    },
    [deleteCart.rejected]: (state, action) => {
    },

    //update
    [updateCart.pending]: (state, action) => {
    },
    [updateCart.fulfilled]: (state, action) => {
      // if (action.payload) {
      //   let index = state.cart.map((item) => item.product.id).indexOf(action.payload.product.id);
      //   state.cart[index] = {
      //     ...state.cart[index],
      //     ...action.payload
      //   };
      //   localStorage.setItem('cart', JSON.stringify(state.cart));
      // }
    },
    [updateCart.rejected]: (state, action) => {
    },
  }
});

const { actions, reducer } = cartSlice;

const { clearStateCart } = actions;

export { clearStateCart };

export default reducer;
