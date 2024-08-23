import { configureStore } from '@reduxjs/toolkit'
import searchHotelSlice from './slice/searchHotelSlice'
import danangHotel from './slice/danangHotel'
import HaNoiFlights from './slice/HaNoiFlights'
import DaLatFlights from './slice/DaLatFlights'
import HueFlights from './slice/HueFlights'
import DaNangFlights from './slice/DaNangFlights'
import QuangNgaiFlights from './slice/QuangNgaiFlights'
import detailHotelSlice from './slice/detailHotelSlice'
import fetchPhotoHotel from './slice/fetchPhotoHotel'
import reviewScoresSlice from './slice/reviewScoresSlice'
import descriptionHotelSlice from './slice/descriptionHotelSlice'
import test from './slice/testslice'
export const store = configureStore({
    reducer: {
        searchHotel: searchHotelSlice,
        danangHotel: danangHotel,
        HaNoiFlights: HaNoiFlights,
        DaLatFlights: DaLatFlights,
        HueFlights: HueFlights,
        DaNangFlights: DaNangFlights,
        QuangNgaiFlights: QuangNgaiFlights,
        detailHotelSlice: detailHotelSlice,
        photoHotelSlice: fetchPhotoHotel,
        reviewScoresSlice: reviewScoresSlice,
        descriptionHotelSlice: descriptionHotelSlice,
        test: test,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store