import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface HotelState {
    autoComplete: any[];
    hotels: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: HotelState = {
    autoComplete: [],
    hotels: [],
    status: 'idle',
    error: null
}
//get location id
export const fetchAutoCompleteLocation = createAsyncThunk('stays/auto-complete', async (query: string)=>{
    const url = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${query}`;
    const authenticAPI = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
            'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
        }
    }

    try {
        const res = await fetch(url, authenticAPI);
        if(res.ok){
            const data = await res.json();
            return data?.data?.[0]?.id;
        }
    } catch (error) {
        return error;
    }

})

//search hotel with location id
export const fetchHotelSearch = createAsyncThunk('stays/search', 
    async ({locationID, checkInDate, checkOutDate, adult, children, room}: {locationID: string, checkInDate: string, checkOutDate: string, adult: number, children?: number, room: number})=>{
        const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=${locationID}&checkinDate=${checkInDate}&checkoutDate=${checkOutDate}&rooms=${room}&adults=${adult}&children=${children || 0}&units=metric&temperature=c`
        const authenticAPI = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
                'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
            }
        }

        try {
            const res = await fetch(url, authenticAPI);
            if(res.ok){
                const data = await res.json();
                return data?.data;
            }
        } catch (error) {
            console.log(error);
        }})

const hotelSearchSlice = createSlice({
    name: 'hotelSearch',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAutoCompleteLocation.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchAutoCompleteLocation.fulfilled, (state, action: PayloadAction<any>)=>{
            state.status = 'succeeded';
        }).addCase(fetchAutoCompleteLocation.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch data';
        })
        .addCase(fetchHotelSearch.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchHotelSearch.fulfilled, (state, action: PayloadAction<any>)=>{
            state.status = 'succeeded';
            state.hotels = action.payload;
        }).addCase(fetchHotelSearch.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch data';
        })
    }
})

export default hotelSearchSlice.reducer;