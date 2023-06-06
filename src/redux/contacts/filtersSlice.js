import { createSlice } from '@reduxjs/toolkit';

const initialFilter = "";
const filtersSlice = createSlice({
  name: 'filter',
    initialState: initialFilter,
    reducers: {
        filtersContact:(state, action)=>{
        return action.payload;
                          },
                            },
                });

 
export const { filtersContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;