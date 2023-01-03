import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import ClientServices from "../../Services/client.services";
import {login} from "../User/AuthSlice";


const initialState = {clients: [], clientInUse: {},allClients:[]};

export const addClient = createAsyncThunk("client/AddClient",
    async (client, thunkAPI) => {
        try {
            const response = await ClientServices.addClientDb(client);
            if (response.status === 200) {

                return response.data;
            }
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

export const fetchClient = createAsyncThunk(
    "client/fetchClient",
    async (userID, thunkAPI) => {
        try {

            const response = await ClientServices.fetchClientsByUserId(userID)
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
export const getAllClients = createAsyncThunk(
    "client/getAllClients",
    async (userID, thunkAPI) => {
        try {

            const response = await ClientServices.getAllClients()
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
            addClientState(state, action) {
                state.clients.push(action.payload)
            },

        },
        extraReducers(builder) {
            builder
                .addCase(setClientInUse.fulfilled, (state, action) => {
                    state.clientInUse = action.payload
                }).addCase(fetchClient.fulfilled, (state, action) => {
                    state.clients = action.payload
                }).addCase(addClient.fulfilled, (state, action) => {

                }).addCase(getAllClients.fulfilled, (state, action) => {
                    state.allClients = action.payload
                })


        }
    }
)

export const {setClients, clearClientInUse,addClientState} = clientSlice.actions

