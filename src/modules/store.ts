import { configureStore, AnyAction, combineReducers, CombinedState } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import userReducer from './slices/userSlice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'
import rootSaga from './sagas'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()
const isDev = process.env.NODE_ENV === 'development'

const combinedReducer = combineReducers({
    user: userReducer,
})
const rootReducer = (
	state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state,
            ...action.payload
        }
    } else{
        return combinedReducer(state, action)
    }
}
const makestore = () => {
    const store = configureStore({
        reducer: { rootReducer },
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false})
        //직렬화 문제 발생 시 {serializableCheck: false} 파라미터로 전달
            .prepend(sagaMiddleware)
            .concat(logger),
        devTools : isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

const store = rootReducer; // makeStore() ==> rootReducer

export type AppState = ReturnType<typeof rootReducer>; // store.getState
export type AppDispatch = ReturnType<typeof store>["dispatch"]; // 오류 냅두셈
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper(makestore)
export default store;