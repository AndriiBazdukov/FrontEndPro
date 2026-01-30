import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const login = createAsyncThunk(
    "auth/login",
    async ({ login, password }) => {
        console.log('Login attempt:', { login, password });
        const { data } = await api.get("/users");
        console.log('Users:', data);
        const user = data.find(
            u => u.login === login && u.password === password
        );
        if (!user) throw new Error("Invalid credentials");
        console.log('Found user:', user);
        localStorage.setItem("token", user.token);
        return user.token;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: { token: localStorage.getItem("token"), error: null },
    reducers: {
        logout: state => {
            state.token = null;
            localStorage.removeItem("token");
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            state.error = null;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.error = action.error.message;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;