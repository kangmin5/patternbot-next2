import { configureStore, ThunkAction, Action, AnyAction, combineReducers, CombinedState } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import usersReducer from './users/userSlice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'
import coinReducer from './coins'
import orderReducer from './orders'
import settingReducer from './settings'
import faqsReducer from './faqs'
import rootSaga from './sagas'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { UserState } from '@/interface'

const sagaMiddleware = createSagaMiddleware()
const isDev = process.env.NODE_ENV === 'development'

interface RootStates {
	user: UserState
}

const rootReducer:any = (
	state: RootStates,
    action: AnyAction
): CombinedState<RootStates> => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        user: usersReducer
        
    })(state,action)
}

const makestore = () => {
    const store = configureStore({
        reducer: { rootReducer },
        middleware: getDefaultMiddleware =>
            isDev ? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools: isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}


const store = makestore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper(makestore, {debug: isDev})
export default store;