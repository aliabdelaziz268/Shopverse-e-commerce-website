import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts, getProductById } from "../../API/fetchApi";

export const getAllProductsAction = createAsyncThunk(
  "products/getAllProductsAction",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);
export const getProductByIdAction = createAsyncThunk(
  "product/getProductByIdAction",
  async (args, thunkAPI) => {
    // console.log(args);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getProductById(args);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    filteredProducts: [],
    categories: [],
    selectedCategory: "All",
    product: {},
    isLoading: false,
    errors: null,
  },
  reducers: {
    setCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (p) => p.category === action.payload
        );
      }
    },
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === "") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((p) =>
          p.title.toLowerCase().includes(searchTerm)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;

        const uniqueCategories = [
          "All",
          ...new Set(action.payload.map((p) => p.category)),
        ];
        state.categories = uniqueCategories;
      })
      .addCase(getAllProductsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.error.message;
      });

    builder.addCase(getProductByIdAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action);
      state.product = action.payload;
    });
    builder.addCase(getProductByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
  },
});

export const { setCategoryFilter, searchProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
