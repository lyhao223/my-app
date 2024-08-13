import { configureStore } from '@reduxjs/toolkit'
import searchHotelSlice from './slice/searchHotelSlice'
import danangHotel from './slice/danangHotel'

export const store = configureStore({
    reducer: {
        searchHotel: searchHotelSlice,
        danangHotel: danangHotel
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store