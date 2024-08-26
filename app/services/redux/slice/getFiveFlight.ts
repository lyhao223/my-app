import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface FlightState {
    flights: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: FlightState = {
    flights: [],
    status: 'idle',
    error: null
}

export const fetchFiveFlight = createAsyncThunk('flight/fetchFiveFlight', async ({origin, destination}:{origin:string, destination:string}) => {
    const today = new Date();
    const formatToday = formatDate(today);
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const formatTomorrow = formatDate(tomorrow);
    const getFiveDays = formatDate(new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000));

    const url = `https://agoda-com.p.rapidapi.com/flights/search-roundtrip?origin=${origin}&destination=${destination}&departureDate=${formatTomorrow}&returnDate=${getFiveDays}`
    const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
         // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
		'x-rapidapi-host': 'agoda-com.p.rapidapi.com'
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
        console.log(formatTomorrow)
    }
})

const fiveFlightsSlice = createSlice({
    name: 'fiveFlights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFiveFlight.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchFiveFlight.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.flights = action.payload;
        }).addCase(fetchFiveFlight.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch data';
        });
    }
});

export default fiveFlightsSlice.reducer;