import { createSlice } from "@reduxjs/toolkit";
const orderSliceType = "slice/order"
export interface IOrderState {}
const initialState: IOrderState ={}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{}
})
export default orderSlice.reducer;