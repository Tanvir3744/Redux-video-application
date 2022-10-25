import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags: [],
    isError: false,
    error: '',
    loading:false
}

//creating thunk function 
const fetchTags = () => {
    
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
});