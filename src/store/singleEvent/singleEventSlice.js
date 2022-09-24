import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    singleEvent: []
}

export const getSingleEvent = createAsyncThunk('/singleEvent', async (id) => {
    try{
        const { data } = await axios.get(`/api/events/${id}`)
        return data
    }
    catch(err) {
        console.log(err)
    }
})


export const singleEventSlice = createSlice({
    name: 'singleEvent',
    initialState,
    reducers: {},
    extraReducers: {
        [getSingleEvent.fulfilled]: (state, action) => {
            state = action.payload;
        },
    }
})



export default singleEventSlice.reducer


