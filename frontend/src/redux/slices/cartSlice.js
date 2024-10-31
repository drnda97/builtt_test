import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to hold items in the shopping bag
  totalAmount: 0, // Total amount of items in the shopping bag (discounted)
  totalQuantity: 0, // Total quantity of items in the shopping bag
  totalPriceWithoutDiscount: 0, // Total price of items without any discount
  totalDiscountedPrice: 0, // Total discounted price for all items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const discountMultiplier = (100 - newItem.discount) / 100;

      // Calculate the discounted price per unit
      const discountPrice = newItem.price * (newItem.discount / 100);
      const discountedPricePerUnit = newItem.price * discountMultiplier;

      // Calculate total prices
      const itemTotalPriceWithoutDiscount = newItem.price * newItem.quantity;
      const itemTotalDiscountedPrice =
        discountedPricePerUnit * newItem.quantity;

      if (existingItem) {
        // If item already exists, update the quantity and prices
        existingItem.quantity += newItem.quantity;
        existingItem.totalPriceWithoutDiscount += itemTotalPriceWithoutDiscount;
        existingItem.totalDiscountedPrice += itemTotalDiscountedPrice;
        existingItem.discountPrice = discountPrice; // Update per-unit discount price
      } else {
        // If it's a new item, add it to the cart
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
          discountPrice,
          totalPriceWithoutDiscount: itemTotalPriceWithoutDiscount,
          totalDiscountedPrice: itemTotalDiscountedPrice,
        });
      }

      // Update cart totals
      state.totalPriceWithoutDiscount += itemTotalPriceWithoutDiscount;
      state.totalDiscountedPrice += itemTotalDiscountedPrice;
      state.totalAmount += itemTotalDiscountedPrice; // totalAmount now reflects total discounted price
      state.totalQuantity += newItem.quantity;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update cart totals by removing the item's contribution
        state.totalPriceWithoutDiscount -=
          existingItem.totalPriceWithoutDiscount;
        state.totalDiscountedPrice -= existingItem.totalDiscountedPrice;
        state.totalAmount -= existingItem.totalDiscountedPrice;
        state.totalQuantity -= existingItem.quantity;

        // Remove the item from the cart
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Calculate new item totals based on the updated quantity
        const discountMultiplier = (100 - existingItem.discount) / 100;
        const discountPrice =
          existingItem.price * (existingItem.discount / 100);
        const discountedPricePerUnit = existingItem.price * discountMultiplier;

        const previousTotalPriceWithoutDiscount =
          existingItem.totalPriceWithoutDiscount;
        const previousTotalDiscountedPrice = existingItem.totalDiscountedPrice;

        // Update item totals
        existingItem.totalPriceWithoutDiscount = existingItem.price * quantity;
        existingItem.totalDiscountedPrice = discountedPricePerUnit * quantity;
        existingItem.discountPrice = discountPrice; // Update per-unit discount price
        existingItem.quantity = quantity;

        // Adjust cart totals
        state.totalPriceWithoutDiscount +=
          existingItem.totalPriceWithoutDiscount -
          previousTotalPriceWithoutDiscount;
        state.totalDiscountedPrice +=
          existingItem.totalDiscountedPrice - previousTotalDiscountedPrice;
        state.totalAmount +=
          existingItem.totalDiscountedPrice - previousTotalDiscountedPrice;
        state.totalQuantity += quantity - existingItem.quantity;
      }
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart, changeQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
