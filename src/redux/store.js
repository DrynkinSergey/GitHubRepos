import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './slices/reposSlice'
export const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
})
