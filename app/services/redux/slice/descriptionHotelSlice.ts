import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DescriptionHotelState {
    desHotel: any[];
    status: "idle"| 'success' | "loading" | "failed";
    error: string | null;
}

const initialState: DescriptionHotelState = {
    desHotel: [],
    status: "idle",
    error: null,
};

export const fetchDescriptionHotel = createAsyncThunk('reviewScores/fetchdescriptionHotel', async (hotelID: string) => {
    const url = `https://booking-com18.p.rapidapi.com/stays/get-description?hotelId=${hotelID}`;
    const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
        'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};

    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            console.log(data?.data);
            return data?.data;
        }
    } catch (error) {
        
    }
});

const descriptionHotelSlice = createSlice({
    name: 'descriptionHotel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDescriptionHotel.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchDescriptionHotel.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.desHotel = action.payload;
        });
        builder.addCase(fetchDescriptionHotel.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null;
        });
    }
});

export default descriptionHotelSlice.reducer;