import { configureStore } from '@reduxjs/toolkit'
import searchHotelSlice from './slice/searchHotelSlice'
import danangHotel from './slice/danangHotel'
import HaNoiFlights from './slice/HaNoiFlights'
import DaLatFlights from './slice/DaLatFlights'
import HueFlights from './slice/HueFlights'
import DaNangFlights from './slice/DaNangFlights'
import QuangNgaiFlights from './slice/QuangNgaiFlights'

export const store = configureStore({
    reducer: {
        searchHotel: searchHotelSlice,
        danangHotel: danangHotel,
        HaNoiFlights: HaNoiFlights,
        DaLatFlights: DaLatFlights,
        HueFlights: HueFlights,
        DaNangFlights: DaNangFlights,
        QuangNgaiFlights: QuangNgaiFlights,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store