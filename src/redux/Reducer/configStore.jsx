// import { createStore } from 'redux'



// export const store = createStore(rootReducer)
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'
// import DatVeReducer from './DatVeReducer';


export const store = configureStore({
  reducer: rootReducer
})
