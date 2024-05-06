import { configureStore } from '@reduxjs/toolkit'

//Reducers
import sectionWindowReducers from './stores/sectionWindow'
import todosReducers from './stores/todos'

export default configureStore({
  reducer: {
    sectionWindow: sectionWindowReducers,
    todos: todosReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})