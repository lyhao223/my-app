import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface RoomListState {
    roomList: any[];
    status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: RoomListState = {
    roomList: [],
    status: 'idle'
}

export const fetchRoomList = createAsyncThunk('roomList/fetchRoomList', async ({hotelID, checkinDate, checkoutDate, adult, children, room}:{hotelID: any, checkinDate: string, checkoutDate: string, adult: number, children?:number, room:number}) => {
   const url = `https://booking-com18.p.rapidapi.com/stays/room-list?hotelId=${hotelID}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&rooms=${room}&adults=${adult}&children=${children}&units=metric`
   const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};
    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            console.log(data?.data);
            return data?.data;
        }else {
            throw new Error('Failed to fetch data');
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
        })
        builder.addCase(fetchRoomList.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'success';
            state.roomList = action.payload;
        })
        builder.addCase(fetchRoomList.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export default roomListSlice.reducer;