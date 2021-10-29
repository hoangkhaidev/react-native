import { createAsyncThunk } from '@reduxjs/toolkit';

const addPayment = createAsyncThunk(
    'cart/addPayment',
    async (data, props) => {
        console.log(data);
        try {
            // const responseOrder = await cartApi.createOrder({
            //     ...data.order,
            //     fullName: data.order.fullName ? data.order.fullName.trim() : '',
            //     tel: data.order.tel ? data.order.tel.trim() : '',
            //     address: data.order.address ? data.order.address.trim() : '',
            //     totalPrice: Number(data.totalPrice),
            // });

            // const responseOrderDetail = await cartApi.createOrderDetail(
            //     {
            //       orderId: responseOrder.id,
            //       dataCart: data.carts
            //     }
            // );

            // const cart = responseOrderDetail;
            return cart;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);

const createCart = createAsyncThunk(
    'cart/createCart',
    async (data, props) => {
        try {
            const cart = data;
            return cart;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);

const getCart = createAsyncThunk(
    'cart/getCart',
    async (data, props) => {
        try {
            // const response = await cartApi.getCart(data);
            // const cart = response.data;
            return data;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);

const getCartFirst = createAsyncThunk(
    'cart/getCartFirst',
    async (data, props) => {
        try {
            return data;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);
const updateCart = createAsyncThunk(
    'cart/updateCart',
    async (data, props) => {
        try {
            const cart = data;
            return cart;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);
const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async (data, props) => {
        try {
            const cartItem = data.cartItem;
            return cartItem;
        } catch (err) {
            const newError = { ...err };
            const payload = { error: newError.response.data };
            return props.rejectWithValue(payload);
        }
    }
);

export {
    getCart,
    deleteCart,
    getCartFirst,
    updateCart,
    createCart,
    addPayment
};


