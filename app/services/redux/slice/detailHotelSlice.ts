import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailHotelState {
    hotel: any[];
    roomsRecommendation: any[];
    status: "idle"| 'success' | "loading" | "failed";
    allFacilities: any[];
    hotelFacilities: any;
    error: string | null;
}

const initialState: DetailHotelState = {
    hotel: [],
    roomsRecommendation: [],
    allFacilities: [],
    hotelFacilities: null,
    status: "idle",
    error: null,
};

export const fetchDetailHotel = createAsyncThunk('detailHotel/fetchDetailHotel', 
    async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: string, checkinDate:any, checkoutDate:any, adult?:any, children?:any, room?:any}) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/detail?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
        const options = {
                method: 'GET',
                headers: {
                    // 'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                            // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
                // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8',
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
                    // 'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8',
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

export const getAllFacilities = createAsyncThunk('getFacilities/getAllFacilities', 
    async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: string, checkinDate:any, checkoutDate:any, adult?:any, children?:any, room?:any}) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/all-facilities?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
        const options = {
                method: 'GET',
                headers: {
                    // 'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                    // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8',
                    'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	       }
        };

        try {
            const res = await fetch(url, options);
            if(res.ok){
                const data = await res.json();
                console.log(data?.data?.facilities);
                return data?.data?.facilities;
            }
        } catch (error) {
            console.log(error);
        }
});

export const getHotelFacilities = createAsyncThunk('getHotelFacilities/getHotelFacilities', 
    async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: string, checkinDate:any, checkoutDate:any, adult?:any, children?:any, room?:any}) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/detail?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
        const options = {
                method: 'GET',
                headers: {
                    // 'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8', lyhao0710
                     // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                    // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f994005995msh75ef35a0ea22e6cp155262jsndbc20e4f98b8',
                    'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	       }
        };

        try {
            const res = await fetch(url, options);
            if(res.ok){
                const data = await res.json();
                console.log(data?.data?.hotel_facilities);
                return data?.data?.hotel_facilities;
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
        })
        builder.addCase(getAllFacilities.pending, (state) => {
            state.status = "loading";
        })    
        builder.addCase(getAllFacilities.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.allFacilities = action.payload;
        })
        builder.addCase(getAllFacilities.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null;
        })
        builder.addCase(getHotelFacilities.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(getHotelFacilities.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.hotelFacilities = action.payload;
        });
        builder.addCase(getHotelFacilities.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null
        })
        ;
    }
});

export default detailHotelSlice.reducer;