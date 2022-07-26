import { createSlice } from "@reduxjs/toolkit";
const settingSliceType = "slice/setting"
export interface ISettingState {}
const initialState: ISettingState ={}
const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers:{}
})
export default settingSlice.reducer;