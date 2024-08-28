import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { get } from 'http';

interface HotelState {
    autoComplete: any[];
    hotels: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    hotelID: string | null;
    checkinDate: string | null;
    checkoutDate: string | null;
    adult: number | null;
    children: number | null;
    room: number | null;
}

const initialState: HotelState = {
    autoComplete: [],
    hotels: [],
    status: 'idle',
    error: null,
    hotelID: null,
    checkinDate: null,
    checkoutDate: null,
    adult: null,
    children: null,
    room: null,
};

// Fetch location ID based on user query
export const fetchAutoCompleteLocation = createAsyncThunk('stays/auto-complete', async (query: string) => {
    const url = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${query}`;
    const authenticAPI = {
        method: 'GET',
        headers: {
            // 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
             // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                    // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
            // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
            'x-rapidapi-host': 'booking-com18.p.rapidapi.com',
        },
    };

    try {
        const res = await fetch(url, authenticAPI);
        if (res.ok) {
            const data = await res.json();
            return data?.data?.[0]?.id;
        }
    } catch (error) {
        throw error;
    }
});

// Search hotels based on location ID and other parameters
export const fetchHotelSearch = createAsyncThunk(
    'stays/search',
    async ({ locationID, checkInDate, checkOutDate, adult, children, room }: { locationID: string; checkInDate: string; checkOutDate: string; adult: number; children?: number; room: number }) => {
        const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=${locationID}&checkinDate=${checkInDate}&checkoutDate=${checkOutDate}&rooms=${room}&adults=${adult}&children=${children || 0}&units=metric&temperature=c`;
        const options = {
            method: 'GET',
            headers: {
                // 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
                 // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                        // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
                // 'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
        // 'x-rapidapi-key': 'ad3d6c1eecmsh0bab332e06a942ap15b50ejsnde34c9285d4f',
        'x-rapidapi-key': '076d13b60dmsh3bb47f1b2b19984p12ef60jsn9a1ba3f6e983',
                'x-rapidapi-host': 'booking-com18.p.rapidapi.com',
            },
        };

        try {
            const res = await fetch(url, options);
            if (res.ok) {
                const data = await res.json();
                return data?.data;
            }
        } catch (error) {
            throw error;
        }
    }
);

const hotelSearchSlice = createSlice({
    name: 'hotelSearch',
    initialState,
    reducers: {
        getCheckinDate: (state, action: PayloadAction<string>) => {
            state.checkinDate = action.payload;
        },
        getCheckoutDate: (state, action: PayloadAction<string>) => {
            state.checkoutDate = action.payload;
        },
        getAdult: (state, action: PayloadAction<number>) => {
            state.adult = action.payload;
        },
        getChildren: (state, action: PayloadAction<number>) => {
            state.children = action.payload;
        },
        getRoom: (state, action: PayloadAction<number>) => {
            state.room = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAutoCompleteLocation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAutoCompleteLocation.fulfilled, (state, action: PayloadAction<string | null>) => {
                state.status = 'succeeded';
                state.hotelID = action.payload;
            })
            .addCase(fetchAutoCompleteLocation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch location ID';
            })
            .addCase(fetchHotelSearch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHotelSearch.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'succeeded';
                state.hotels = action.payload;
            })
            .addCase(fetchHotelSearch.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch hotels';
            });
    },
});

export const { getCheckinDate, getCheckoutDate, getAdult, getChildren, getRoom } = hotelSearchSlice.actions;
export default hotelSearchSlice.reducer;
