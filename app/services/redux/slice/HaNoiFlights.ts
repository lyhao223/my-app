import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface HaNoiFlightsState {
    flights: any[];
    status: "idle" | "loading" | "failed" | "success";
    error: string | null;
}

const initialState: HaNoiFlightsState = {
    flights: [],
    status: "idle",
    error: null,
};


export const fetchHaNoiFlights = createAsyncThunk('/hanoiflights', async()=>{
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const formatTomorrow = formatDate(tomorrow);
    const getDayHaNoi = formatDate(new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000));

    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=eyJzIjoiU0dOIiwiZSI6Ijk1NjczMzc5IiwiaCI6IjI3NTQ2MzI5In0%3D&toId=eyJzIjoiSEFOIiwiZSI6IjEyODY2ODA3OSIsImgiOiIyNzU0MTk5MiJ9&departDate=${formatTomorrow}&returnDate=${getDayHaNoi}&adults=1&cabinClass=economy&currency=VND&market=VN&locale=vi-VN`
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
		'x-rapidapi-host': 'skyscanner80.p.rapidapi.com'
	}
};
    const response = await fetch(url, options);
    try {
        if(response.ok){
            const data = await response.json();
            const lengthHaNoiFlights = data?.data?.itineraries.length
            // console.log(lengthHaNoiFlights);
            return lengthHaNoiFlights;
        }
    } catch (error) {
        console.log(error);
    }
})

const HaNoiFlightsSlice = createSlice({
    name: 'HaNoiFlights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHaNoiFlights.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchHaNoiFlights.fulfilled, (state, action) => {
                state.status = "success";
                state.flights = action.payload;
            })
            .addCase(fetchHaNoiFlights.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default HaNoiFlightsSlice.reducer