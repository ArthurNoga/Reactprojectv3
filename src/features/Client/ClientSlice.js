import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import ClientServices from "../../Services/client.services";
import {login} from "../User/AuthSlice";


const initialState = {clients: [], clientInUse: {}}

export const addClient = createAsyncThunk("client/AddClient",
    async ({firstname, lastname, mail, tel}, thunkAPI) => {
        try {
            const response = await ClientServices.addClient(firstname, lastname, mail, tel);
            console.log(response.data)
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue();
        }
    }
)
export const setClientInUse = createAsyncThunk(
    "client/setClientInUse",
    async (userID, thunkAPI) => {
        try {

            const response = await ClientServices.getCLientById(userID)
            console.log(response.attributes + "fetchClient")
            return response
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const clientSlice = createSlice(
    {
        name: "client",
        initialState,
        reducers: {
            setClients: (state, action) => {
                state.clients = action.payload
            },
            clearClientInUse: (state, action) => {
                state.clientInUse = {}
            },
            setClientInUse(state, action) {
                state.clientInUse = action.payload
            },

        },
        extraReducers(builder) {
            builder
                .addCase(setClientInUse.fulfilled, (state, action) => {
                    state.clientInUse = action.payload
                })


        }
    }
)

export const {setClients, clearClientInUse} = clientSlice.actions

