import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    videos: [],
    loading: false,
    isError: false, 
    error :''
}

export const fetchVidoesAsync = createAsyncThunk('vidoes/fetchVidoes', () => {
    
})

const videoSlice = createSlice({
    name: 'vidoes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})