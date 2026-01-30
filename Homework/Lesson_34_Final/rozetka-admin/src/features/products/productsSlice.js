import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        console.log('Fetching products...');
        const { data } = await api.get("/products");
        console.log('Fetched products:', data);
        return data;
    }
);

export const addProduct = createAsyncThunk(
    "products/add",
    async (product) => {
        console.log('Adding product:', product);
        const { data } = await api.post("/products", product);
        console.log('Added product:', data);
        return data;
    }
);

export const updateProduct = createAsyncThunk(
    "products/update",
    async ({ id, ...product }) => {
        const { data } = await api.put(`/products/${id}`, product);
        return data;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/delete",
    async (id) => {
        await api.delete(`/products/${id}`);
        return id;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: { products: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                console.log('Products loaded:', action.payload);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
                console.log('Product added to state:', action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(p => p.id === action.payload.id);
                if (index !== -1) state.products[index] = action.payload;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(p => p.id !== action.payload);
            });
    },
});

export default productsSlice.reducer;
