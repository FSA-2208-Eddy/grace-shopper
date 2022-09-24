import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    events: []
}


export const getEvents = createAsyncThunk('/allEvents', async () => {
    try{
        const { data } = await axios.get('/api/events')
        return data
    }
    catch(err) {
        console.log(err)
    }
})

export const getEventsByTag = createAsyncThunk('/allEventsByTag', async (tagId) => {
    try{
        const { data } = await axios.get(`/api/events/tag/${tagId}`)
        return data
    }
    catch(err) {
        console.log(err)
    }
})

export const getSingleEvent = createAsyncThunk('/singleEvent', async (id) => {
    try{
        const { data } = await axios.get(`/api/events/${id}`)
        return data
    }
    catch(err) {
        console.log(err)
    }
})


export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: {
        [getEvents.fulfilled]: (state, action) => {
            state.events = action.payload
        },
        [getSingleEvent.fulfilled]: (state, action) => {
            return action.payload;
        },
        [getEventsByTag.fulfilled]: (state, action) => {
            state.events = action.payload;
        },
    }
})



export default eventSlice.reducer


