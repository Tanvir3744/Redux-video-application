import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"

//initializing the state
const initialState = {
    videos: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVidoesAsync = createAsyncThunk('vidoes/fetchVidoes', async({tags, search}) => { //whenever we want to send something from our api's we can't send more than one parameter
    const videos = await getVideos(tags, search});
    return videos;
})

//creating slice 
const vidoesSlice = createSlice({
    name: 'vidoes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVidoesAsync.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchVidoesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        })

        builder.addCase(fetchVidoesAsync.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.vidoes = [];
        })
    }
});

export default vidoesSlice.reducer;