import { rootReducer } from './Reducer';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})