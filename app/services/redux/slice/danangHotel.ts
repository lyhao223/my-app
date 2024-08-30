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
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
         // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': '934339b836mshe8891fa7f06de75p1425c1jsn09682e6e9f50',
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