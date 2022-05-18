// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import api from 'services/api';


export const get<%= upCaseName %> = createAsyncThunk(`<%= name %>/get<%= upCaseName %>`, async (reqObj, thunkAPI) => {
    try {
        // const data = await api.get("/<%= upCaseName %>");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type <%= upCaseName %> = {
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
} as <%= upCaseName %>;

export const <%= name %>Slice = createSlice({
    name:  "<%= name %>",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(get<%= upCaseName %>.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(get<%= upCaseName %>.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(get<%= upCaseName %>.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = <%= name %>Slice.actions;

 export default <%= name %>Slice.reducer;
