// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import api from 'services/api';

export const getCharacters2 = createAsyncThunk(
  `characters2/getCharacters2`,
  async (reqObj, thunkAPI) => {
    try {
      // const data = await api.get("/Characters2");
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export type Characters2 = {
  loading: boolean;
  data: Array<any>;
  requestObject: {
    index: 0;
    offset: 10;
  };
};

let initialState = {
  loading: false,
  data: [],
  requestObject: {
    index: 0,
    offset: 10,
  },
} as Characters2;

export const characters2Slice = createSlice({
  name: 'characters2',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getCharacters2.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = true;
    });
    builder.addCase(getCharacters2.fulfilled, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCharacters2.rejected, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = false;
    });
    builder.addCase('RESET', () => initialState);
  },
});

export const {reset} = characters2Slice.actions;

export default characters2Slice.reducer;
