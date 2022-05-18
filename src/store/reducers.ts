import {combineReducers} from '@reduxjs/toolkit';

import characters from './characters/slice';

const rootReducer = combineReducers({
  characters,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
