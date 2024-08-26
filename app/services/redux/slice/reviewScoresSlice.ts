import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReviewScoresState {
    reviewScores: any[];
    status: "idle"| 'success' | "loading" | "failed";
    error: string | null;
}

const initialState: ReviewScoresState = {
    reviewScores: [],
    status: "idle",
    error: null,
};

export const fetchReviewScores = createAsyncThunk('reviewScores/fetchReviewScores', async (hotelID: string) => {
    const url = `https://booking-com18.p.rapidapi.com/stays/review-scores?hotelId=${hotelID}`;
    const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': 'f29029bc0bmshb775293de0f8d2cp1a3632jsnd5d94cab716e', lyhao0710
         // 'x-rapidapi-key': 'bd5fa9a9f3msh54e4b7a9a67aef8p1e078cjsna62580ff7d54', //lyhao2203
                // 'x-rapidapi-key': 'f370ac7d34msha690a041cc0a627p1c4d3djsn19bb08555352', //haoly2203
        'x-rapidapi-key': '170546d326msh08a84815d65b01fp1cd7dajsnec89c52256ca',
		'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
	}
};

    try {
        const res = await fetch(url, options);
        if(res.ok){
            const data = await res.json();
            return data?.data?.score_percentage[0];
        }
    } catch (error) {
        
    }
});

const reviewScoresSlice = createSlice({
    name: 'reviewScores',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviewScores.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchReviewScores.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = "success";
            state.reviewScores = action.payload;
        });
        builder.addCase(fetchReviewScores.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || null;
        });
    }
});

export default reviewScoresSlice.reducer;