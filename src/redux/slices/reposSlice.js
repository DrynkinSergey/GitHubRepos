import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



const baseUrl = `https://api.github.com/search/repositories?`;
const initialState = {
    repos: [],
    status: 'Loading',
    query: 'React',
    currentPage: 1
}
export const fetchRepositories = createAsyncThunk(
    'repos/fetchRepos',
    async function (query) {
        const response = await axios.get(`${baseUrl}q=${query}&per_page=20`)
        const data = await response.data.items
        return data
    }
)


export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setQuery: (state, { payload }) => {
            state.query = payload;
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
    },
    extraReducers: {

        [fetchRepositories.fulfilled]: (state, action) => {
            state.repos = action.payload;
            state.status = 'Resolved';

        },

        [fetchRepositories.pending]: (state, action) => {
            state.repos = [];
            state.status = 'Loading';


        },
        [fetchRepositories.rejected]: (state, action) => {
            state.repos = [];
            state.status = 'Error';


        }

    }
})

export const { setQuery, setCurrentPage } = reposSlice.actions

export default reposSlice.reducer