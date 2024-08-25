import { formatDate } from "@/app/utils/formatDate";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface QuangNgaiFlightsState {
    flights: any[];
    status: "idle" | "loading" | "failed" | "success";
    error: string | null;
}

const initialState: QuangNgaiFlightsState = {
    flights: [],
    status: "idle",
    error: null,
};


export const fetchQuangNgaiFlights = createAsyncThunk('/QuangNgaiflights', async()=>{
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const formatTomorrow = formatDate(tomorrow);
    const getDayQuangNgai = formatDate(new Date(tomorrow.getTime() + 5 * 24 * 60 * 60 * 1000));

    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=eyJzIjoiU0dOIiwiZSI6Ijk1NjczMzc5IiwiaCI6IjI3NTQ2MzI5In0%3D&toId=eyJzIjoiSFVJIiwiZSI6IjEyODY2ODY0MCIsImgiOiIzOTU2MzUzOCJ9&departDate=${formatTomorrow}&returnDate=${getDayQuangNgai}&adults=2&cabinClass=economy&currency=VND&market=VN&locale=vi-VN`
    const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
         // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
        'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
		'x-rapidapi-host': 'skyscanner80.p.rapidapi.com'
	}
};
    const response = await fetch(url, options);
    try {
        if(response.ok){
            const data = await response.json();
            let lengthQuangNgaiFlights = data?.data?.itineraries.length
            if(lengthQuangNgaiFlights <= 0){
                lengthQuangNgaiFlights = 0
            }else{

                return lengthQuangNgaiFlights;
            }
            // console.log(lengthQuangNgaiFlights);
        }
    } catch (error) {
        console.log(error);
    }
})

const QuangNgaiFlightsSlice = createSlice({
    name: 'QuangNgaiFlights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuangNgaiFlights.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchQuangNgaiFlights.fulfilled, (state, action) => {
                state.status = "success";
                state.flights = action.payload;
            })
            .addCase(fetchQuangNgaiFlights.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default QuangNgaiFlightsSlice.reducer