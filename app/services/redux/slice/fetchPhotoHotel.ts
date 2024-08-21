import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface PhotoState {
    photo: any[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PhotoState = {
    photo: [],
    loading: 'idle',
    error: null,
}

export const getPhotoHotel = createAsyncThunk('/photoHotel', async (hotelID: any) => {
    const url = `https://booking-com18.p.rapidapi.com/stays/get-photos?hotelId=${hotelID}`
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};
    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            const photos = data?.data?.data?.[hotelID]?.slice(0,10);
            const lastArrayPhoto = photos?.map((subArray:any) => subArray[subArray.length - 1])
            const getSqurePhoto = lastArrayPhoto?.map((item:any) => item.find((subItem:any)=> subItem.includes('square60')));

            return getSqurePhoto;
        }
    } catch (error) {
        console.error('Failed to fetch data', error);
    }
});

const photoHotelSlice = createSlice({
    name: 'photoHotel',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPhotoHotel.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(getPhotoHotel.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.photo = action.payload;
        });
        builder.addCase(getPhotoHotel.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Failed to fetch data';
        });
    },
});

export default photoHotelSlice.reducer;