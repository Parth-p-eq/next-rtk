import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../api/product/productApi";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(productApi.middleware),
});

// export default store;
setupListeners(store.dispatch);
