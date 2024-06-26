import { createSlice } from '@reduxjs/toolkit'

import { deleteTodoLocalStorage, setTodoStatusLocalStroge} from '../utils/todos'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        value: {},
    },
    reducers: {
        addTodo: (state, action) => {
            if (state.value[action.payload[0]]) {
                state.value[action.payload[0]] = [...state.value[action.payload[0]], action.payload[1]]
            }
            else {
                state.value[action.payload[0]] = [action.payload[1]]

            }

        },
        deleteTodo: (state, action) => {
            Object.keys(state.value).map((item) => {
                if (item === action.payload[0]) {
                    state.value[item] = state.value[item].filter((todo) => todo.id !== action.payload[1])
                    deleteTodoLocalStorage(item, action.payload[1])
                }
            })
        },
        setTodoStatus: (state, action) => {
            Object.keys(state.value).map((item) => {
                if (item === action.payload[0]) {
                    state.value[item].map((todo) => {
                        if (todo.id === action.payload[1]) {
                            todo.finish = !todo.finish
                            setTodoStatusLocalStroge(item, action.payload[1]);
                        }
                    })
                }
            })
        }

    },
})

export const { addTodo, deleteTodo,setTodoStatus } = todos.actions

export default todos.reducer