import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;
import reducer from './reducer.js'

const store = configureStore({
    reducer
  })

  export default store;