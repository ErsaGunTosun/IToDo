import { createSlice } from '@reduxjs/toolkit'


export const sectionWindow = createSlice({
    name: 'sectionWindow',
    initialState: {
        value: [0, 2, 0],
    },
    reducers: {
        setWindow: (state, action) => {
            if (action.payload === 'first') {
                if (state.value[0] === 0) {
                    state.value = [1, 1, 0]
                } else if (state.value[0] === 1) {
                    state.value = [2, 0, 0]
                }
                else {
                    state.value = [1, 1, 1]
                }
            } else if (action.payload === 'second') {
                if (state.value[1] === 0) {
                    state.value = [0, 2, 0]
                } else if (state.value[1] === 1) {
                    state.value = [0, 2, 0]
                }
                else {
                    state.value = [1, 1, 1]
                }
            }
            else if (action.payload === 'third') {
                if (state.value[2] === 0) {
                    state.value = [, 1, 1]
                } else if (state.value[2] === 1) {
                    state.value = [0, 0, 2]
                }
                else {
                    state.value = [1, 1, 1]
                }
            }
        }
    },
})

export const { setWindow } = sectionWindow.actions

export default sectionWindow.reducer