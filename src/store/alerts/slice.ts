// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import api from 'services/api';


export const getAlerts = createAsyncThunk(`alerts/getAlerts`, async (reqObj, thunkAPI) => {
    try {
        // const data = await api.get("/Alerts");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type Alerts = {
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
} as Alerts;

export const alertsSlice = createSlice({
    name:  "alerts",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(getAlerts.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(getAlerts.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getAlerts.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = alertsSlice.actions;

 export default alertsSlice.reducer;
