import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {AppDispatch, RootState} from '@/store'
// Define a type for the slice state
interface UserState {
    name: string
    age: number
}

// Define the initial state using that type
const initialState: UserState = {
    name: 'fine daybreak',
    age: 18
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        rename: (state: UserState, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        addAge: (state: UserState) => {
            state.age += 1
        },
        minAge: (state: UserState) => {
            state.age -= 1
        }
    }
})

export const { rename, addAge, minAge } = userSlice.actions

export const addAgeAsync = () => (dispatch:AppDispatch) => {
    setTimeout(() => {
        dispatch(addAge())
    }, 1000)
}

export const renameAsync = (name : string) => (dispatch:AppDispatch) =>{
    setTimeout(() => {
        dispatch(rename(name))
    },1000)
}

// Other code such as selectors can use the imported `RootState` type
export const userInfo = (state: RootState) => state.user

export default userSlice.reducer