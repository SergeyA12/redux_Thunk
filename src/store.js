import { UserReducer } from "./features/users/users.slice";
import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:UserReducer
})
