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
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
        // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        // 'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
        'x-rapidapi-key': 'a46c365bebmsh8cbcc56908ea19dp174aa4jsn761cd2901fc0',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};
    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            const getUrlPhoto = data?.data?.url_prefix
            const photos = data?.data?.data?.[hotelID]?.slice(0,10);
            const lastArrayPhoto = photos?.map((subArray:any) => subArray[subArray.length - 1])
            const getSqurePhoto = lastArrayPhoto?.map((item:any) => item.find((subItem:any)=> subItem.includes('max2600')));
            const fullUrls: any = [];
            for (const key in getSqurePhoto) {
                if (getSqurePhoto.hasOwnProperty(key)) {
                    fullUrls[key] = `${getUrlPhoto}${getSqurePhoto[key]}`;
                }
            }
            return fullUrls;
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