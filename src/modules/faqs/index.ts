import { createSlice } from "@reduxjs/toolkit";

const initialState = [
        {id:'1',title:'COIN 자동매매프로그램의 기능은?  ',content:' 현재 3종목을 선정하여 인공지능 패턴에 의해 자동으로 사고 파는 프로그램입니다.'},
        {id:'2',title:'기간설정이나 추가종목 매매는?  ',content:' 현재 AI패턴에 의해 7일간의 거래를 기본설정되어 있으며, 향후 종목추가 예정입니다.'}
    ]

const faqsSlice = createSlice({
    name: 'faqs',
    initialState,
    reducers: {
        
    }

})
export default faqsSlice.reducer