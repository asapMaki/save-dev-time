import {combineReducers} from '@reduxjs/toolkit';

// import REPLACE from './REPLACE/slice';

const rootReducer = combineReducers({
  // REPLACE
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
