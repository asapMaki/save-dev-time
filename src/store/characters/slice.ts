// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Character} from 'api/graphql/generated';
// import api from 'services/api';

export const getCharacters = createAsyncThunk(
  `characters/getCharacters`,
  async (reqObj, thunkAPI) => {
    try {
      // const data = await api.get("/Characters");
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export type Characters = {
  loading: boolean;
  data: Array<Character>;
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
} as Characters;

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: state => initialState,
    addCharacters: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharacters.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = false;
    });
    builder.addCase('RESET', () => initialState);
  },
});

export const {reset, addCharacters} = charactersSlice.actions;

export default charactersSlice.reducer;
