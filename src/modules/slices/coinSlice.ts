import { createSlice } from "@reduxjs/toolkit";
const coinSliceType = "slice/coin"
export interface ICoinState {}
const initialState: ICoinState = {}

const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{}
})

export default coinSlice.reducer;