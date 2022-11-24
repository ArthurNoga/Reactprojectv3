import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectService from "../../Services/projects.services";
import {register} from "../User/AuthSlice";

const clients = localStorage.getItem("clients")
const initialState = {clients: []}


export const clientSlice = createSlice(
    {
        name: "client",
        initialState,
        reducers: {
            setClients: (state, action) => {
                state.clients = action.payload
            },
        },
        extraReducers: {}
    }
)

export const {setClients} = clientSlice.actions

