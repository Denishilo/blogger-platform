import {AnyAction, applyMiddleware, combineReducers} from "redux";
import {blogsReducer} from "../reducers/blogsReducer";
import { legacy_createStore as createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {postsReducer} from "../reducers/postsReducer";


export const rootReducer = combineReducers({
    blogs: blogsReducer,
    posts: postsReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector


////types
export type RootReducerType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<RootReducerType, any, AnyAction>

// @ts-ignore
window.store = store;