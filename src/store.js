import { configureStore } from '@reduxjs/toolkit'

//Reducers
import sectionWindowReducers from './stores/sectionWindow'

export default configureStore({
  reducer: {
    sectionWindow: sectionWindowReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})