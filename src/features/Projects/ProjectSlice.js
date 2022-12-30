import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectService from "../../Services/projects.services";
import {fetchClient, setClients} from "../Client/ClientSlice";

const projects=localStorage.getItem("projects")
const initialState = projects?{projects}:{
    projects: []
}
export const fetchProjectsByUserId = createAsyncThunk(
    "project/fetchProjectsByUserId",
    async (userid, thunkAPI) => {
        try {
            const response = await projectService.fetchProjectsByUserId(userid);
            thunkAPI.dispatch(fetchClient(userid))
            return response;
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
);
export const projectSlice = createSlice(
    {
        name: "project",
        initialState,
        reducers:{},
        extraReducers:{
            [fetchProjectsByUserId.fulfilled]: (state, action) => {
                state.projects=action.payload
            },
            [fetchProjectsByUserId.pending]: (state, action) => {
                state.projects=[]
            },
            [fetchProjectsByUserId.rejected]: (state, action) => {
                state.projects=[]
            },
        }

    }
)

const projectsSelector= state=>state.project
