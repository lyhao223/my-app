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
		'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
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