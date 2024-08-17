import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface DaNangFlightsState {
    flights: any[];
    status: "idle" | "loading" | "failed" | "success";
    error: string | null;
}

const initialState: DaNangFlightsState = {
    flights: [],
    status: "idle",
    error: null,
};


export const fetchDaNangFlights = createAsyncThunk('/DaNangflights', async()=>{
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const formatTomorrow = formatDate(tomorrow);
    const getDayDaNang = formatDate(new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000));

    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=eyJzIjoiU0dOIiwiZSI6Ijk1NjczMzc5IiwiaCI6IjI3NTQ2MzI5In0%3D&toId=eyJzIjoiREFEIiwiZSI6Ijk1NjczNjE1IiwiaCI6IjI3NTQwNjY5In0%3D&departDate=${formatTomorrow}&returnDate=${getDayDaNang}&adults=2&cabinClass=economy&currency=VND&market=VN&locale=vi-VN`
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
            let lengthDaNangFlights = data?.data?.itineraries.length
            if(lengthDaNangFlights <= 0){
                lengthDaNangFlights = 0
            }else{

                return lengthDaNangFlights;
            }
            // console.log(lengthDaNangFlights);
        }
    } catch (error) {
        console.log(error);
    }
})

const DaNangFlightsSlice = createSlice({
    name: 'DaNangFlights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDaNangFlights.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDaNangFlights.fulfilled, (state, action) => {
                state.status = "success";
                state.flights = action.payload;
            })
            .addCase(fetchDaNangFlights.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default DaNangFlightsSlice.reducer