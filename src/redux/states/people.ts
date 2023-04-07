 
import { LocalStorageTypes, Person } from "@/models";
import { getItemLocalStorage, setItemLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Person[] = []
  

export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getItemLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getItemLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setItemLocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        },
    }
});

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;