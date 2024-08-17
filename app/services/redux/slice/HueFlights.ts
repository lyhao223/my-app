import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface HueFlightsState {
    flights: any[];
    status: "idle" | "loading" | "failed" | "success";
    error: string | null;
}

const initialState: HueFlightsState = {
    flights: [],
    status: "idle",
    error: null,
};


export const fetchHueFlights = createAsyncThunk('/Hueflights', async()=>{
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const formatTomorrow = formatDate(tomorrow);
    const getDayHue = formatDate(new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000));

    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=eyJzIjoiU0dOIiwiZSI6Ijk1NjczMzc5IiwiaCI6IjI3NTQ2MzI5In0%3D&toId=eyJzIjoiSFVJIiwiZSI6IjEyODY2ODY0MCIsImgiOiIzOTU2MzUzOCJ9&departDate=${formatTomorrow}&returnDate=${getDayHue}&adults=2&cabinClass=economy&currency=VND&market=VN&locale=vi-VN`
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
            let lengthHueFlights = data?.data?.itineraries.length
            if(lengthHueFlights <= 0){
                lengthHueFlights = 0
            }else{

                return lengthHueFlights;
            }
            // console.log(lengthHueFlights);
        }
    } catch (error) {
        console.log(error);
    }
})

const HueFlightsSlice = createSlice({
    name: 'HueFlights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHueFlights.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchHueFlights.fulfilled, (state, action) => {
                state.status = "success";
                state.flights = action.payload;
            })
            .addCase(fetchHueFlights.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default HueFlightsSlice.reducer