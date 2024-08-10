import { configureStore } from '@reduxjs/toolkit'
import searchHotelSlice from './slice/searchHotelSlice'

export const store = configureStore({
    reducer: {
        searchHotel: searchHotelSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store