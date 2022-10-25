import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"


const initialState = {
    videos: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVidoesAsync = createAsyncThunk('vidoes/fetchVidoes', async() => {
    const videos = getVideos();
    return videos;
})

const videoSlice = createSlice({
    name: 'vidoes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVidoesAsync.pending, )
    }
})