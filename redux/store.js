// _app.js o en tu configuración de store
import { configureStore } from '@reduxjs/toolkit';
import { Slice } from './slice';

const store = configureStore({
  reducer: {
    values : Slice.reducer,
  },
});

export default store;