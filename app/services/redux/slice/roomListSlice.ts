import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface RoomListState {
    roomList: any;
    recommendation: any;
    blockHotel: any;
    status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: RoomListState = {
    roomList: [],
    blockHotel: [],
    recommendation: null,
    status: 'idle'
}


export const fetchRoomList = createAsyncThunk('roomList/fetchRoomList', async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: any, checkinDate: any, checkoutDate: any, adult?: any , children?:any, room?:any}) => {
   const url = `https://booking-com18.p.rapidapi.com/stays/room-list?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric&currencyCode=vnd`
   const options = {
	method: 'GET',
	headers: {
		 // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
                // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};
    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            return data?.data;
        }else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.log(error);
    }
})

export const getBlockIDRoomRecommendation =  createAsyncThunk('roomListRecommendation/fetchRoomListRecommendation', async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: any, checkinDate: any, checkoutDate: any, adult?: number | null | any , children?:number | 0 | any, room?:number | null | any}) => {
   const url = `https://booking-com18.p.rapidapi.com/stays/room-list?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric&currencyCode=vnd`
   const options = {
	method: 'GET',
	headers: {
		 // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
                // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};
    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            return data?.data?.room_recommendation[0]?.block_id.split('_')[0];
        }else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.log(error);
    }
})

export const blockHotelRoom = createAsyncThunk('blocHotel/getRoomID', async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: any, checkinDate: any, checkoutDate: any, adult?: any , children?:any, room?:any}) => {
    const url = `https://booking-com18.p.rapidapi.com/stays/room-list?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric&currencyCode=vnd`
    const options = {
        method: 'GET',
        headers: {
            // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                    // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
            // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
            // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
                    // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
            'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
    };

    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            console.log(data?.data?.block);
            return data?.data?.block;
        }
    } catch (error) {
        console.log(error);
    }
})

const roomListSlice = createSlice({
    name: 'roomList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRoomList.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchRoomList.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'success';
            state.roomList = action.payload;
        }).addCase(fetchRoomList.rejected, (state) => {
            state.status = 'failed';
        }).addCase(getBlockIDRoomRecommendation.pending, (state) => {
            state.status = 'loading';
        }).addCase(getBlockIDRoomRecommendation.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'success';
            state.recommendation = action.payload;
        }).addCase(getBlockIDRoomRecommendation.rejected, (state) => {
            state.status = 'failed';
        }).addCase(blockHotelRoom.pending, (state) => {
            state.status = 'loading';
        }).addCase(blockHotelRoom.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'success';
            state.blockHotel = action.payload;
        }).addCase(blockHotelRoom.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export default roomListSlice.reducer;