import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    wishlistItems: [],
    totalPrice: 0,
    CartCount: 0,
    WishlistCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      state.CartCount = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.CartCount = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, newQty } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = Number(newQty);
      }
      state.CartCount = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.CartCount = 0;
    },

    addToWishlist: (state, action) => {
      const product = action.payload;
      const existing = state.wishlistItems.find(
        (item) => item.id === product.id
      );
      if (!existing) {
        state.wishlistItems.push({ ...product });
        state.WishlistCount += 1;
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      state.WishlistCount -= 1;
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
