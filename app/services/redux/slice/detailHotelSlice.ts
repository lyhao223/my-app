import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailHotelState {
    hotel: any[];
    roomsRecommendation: any[];
    status: "idle"| 'success' | "loading" | "failed";
    error: string | null;
}

const initialState: DetailHotelState = {
    hotel: [],
    roomsRecommendation: [],
    status: "idle",
    error: null,
};

export const fetchDetailHotel = createAsyncThunk('detailHotel/fetchDetailHotel', 
    async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: string, checkinDate:any, checkoutDate:any, adult?:any, children?:any, room?:any}) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/detail?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
        const options = {
                method: 'GET',
                headers: {
                    // 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                            // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
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
            console.log(error);
        }
});

export const fetchRoomsRecommendation = createAsyncThunk('fetchRoomsRecommandation/fetchDetailHotel', 
    async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: string, checkinDate:any, checkoutDate:any, adult?:any, children?:any, room?:any}) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/detail?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
        const options = {
                method: 'GET',
                headers: {
                    // 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                    'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
                    'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	       }
        };

        try {
            const res = await fetch(url, options);
            if(res.ok){
                const data = await res.json();
                console.log(data?.data?.room_recommendation);
                return data?.data?.rooms;
            }
        } catch (error) {
            console.log(error);
        }
});


const detailHotelSlice = createSlice({
    name: 'detailHotel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailHotel.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchDetailHotel.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.hotel = action.payload;
        });
        builder.addCase(fetchDetailHotel.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null;
        });
        builder.addCase(fetchRoomsRecommendation.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchRoomsRecommendation.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.roomsRecommendation = action.payload;
        });
        builder.addCase(fetchRoomsRecommendation.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null;
        });
    }
});

export default detailHotelSlice.reducer;