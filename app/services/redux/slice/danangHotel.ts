import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface DanangState {
    hotels: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DanangState = {
    hotels: [],
    status: 'idle',
    error: null
}

export const fetchHotelInDaNangWithHighScore = createAsyncThunk('danang/fetchHotel', async () => {
    const today = new Date();
    const checkinDate = formatDate(today);
    const checkoutDate = formatDate(new Date(today.getTime()+10*24*60*60*1000));
    const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=eyJjaXR5X25hbWUiOiJEYSBOYW5nIiwiY291bnRyeSI6IlZpZXRuYW0iLCJkZXN0X2lkIjoiLTM3MTIxMjUiLCJkZXN0X3R5cGUiOiJjaXR5In0%3D&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=1&adults=2&units=metric&temperature=c`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};

try {
	const res = await fetch(url, options);
    if(res.ok){
        const data = await res.json();
        return data?.data;
    }
} catch (error) {
	console.error(error);
}
});

const danangHotelSlice = createSlice({
    name: 'danangHotel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHotelInDaNangWithHighScore.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchHotelInDaNangWithHighScore.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.hotels = action.payload;
        }).addCase(fetchHotelInDaNangWithHighScore.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch data';
        });
    }
});

export default danangHotelSlice.reducer;